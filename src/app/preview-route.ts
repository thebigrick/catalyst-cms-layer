import { redirect } from 'next/navigation';
import {NextRequest, NextResponse} from 'next/server';
import enableDraftMode from "../service/enable-draft-mode";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ adapter: string; }> },
) => {
  const { adapter } = await params;
  const pageId = request.nextUrl.searchParams.get('id');
  const locale = request.nextUrl.searchParams.get('locale');
  const secret = request.nextUrl.searchParams.get('secret');

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response('Unauthorized', { status: 401 });
  }

  await enableDraftMode();

  const shortLocale = locale?.split('-')[0] || 'en';

  redirect(`/${shortLocale}/cms-page/${adapter}/${pageId}`);
};
