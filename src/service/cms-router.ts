import { draftMode } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import getAdapterCodeAndPageId from './entity-router/get-adapter-code-and-page-id';
import getPathWithoutLocale from './get-path-without-locale';

const cmsRouter = async (request: NextRequest) => {
  const slug = getPathWithoutLocale(request);
  const strippedSlug = slug === '/' ? slug : slug.replace(/^\//, '');
  const locale = request.headers.get('x-bc-locale') ?? '';

  const isPreview = (await draftMode()).isEnabled;
  const page = await getAdapterCodeAndPageId(strippedSlug, {
    locale,
    isPreview,
  });

  if (page) {
    const { adapterCode, pageId } = page;
    const newUrl = `/${locale}/cms-page/${adapterCode}/${pageId}`;
    const rewriteUrl = new URL(newUrl, request.url);

    return NextResponse.rewrite(rewriteUrl);
  }

  return null;
};

export default cmsRouter;
