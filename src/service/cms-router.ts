import { draftMode } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import adapters from '../adapters';
import { ICmsContext } from '../types';

import getPathWithoutLocale from './get-path-without-locale';

const cmsRouter = async (request: NextRequest) => {
  const slug = getPathWithoutLocale(request);
  const strippedSlug = slug === '/' ? slug : slug.replace(/^\//, '');
  const locale = request.headers.get('x-bc-locale') ?? '';

  for (const [adapterCode, adapter] of Object.entries(adapters)) {
    const context: ICmsContext = {
      locale,
      isPreview: (await draftMode()).isEnabled,
      adapterCode,
      rootEntityId: '',
    };

    const pageId = await adapter.getPageIdBySlug(strippedSlug, context);

    if (pageId) {
      const newUrl = `/${locale}/cms-page/${adapterCode}/${pageId}`;

      const rewriteUrl = new URL(newUrl, request.url);

      return NextResponse.rewrite(rewriteUrl);
    }
  }

  return null;
};

export default cmsRouter;
