import React from 'react';
import getAdapter from '../service/get-adapter';
import ChildrenBlocks from '../components/children-block';
import NotFound from '@bigcommerce/catalyst-core/app/[locale]/not-found';
import Context from '../components/context';
import { draftMode } from 'next/headers';
import {ICmsContext} from "../types";
import RootEntityRender from "../components/root-entity-render";

export interface CmsPageProps {
  params: Promise<{ adapter: string; id: string; locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function CmsPage(props: CmsPageProps) {
  const { locale, adapter: adapterCode, id } = await props.params;
  const { isEnabled: isPreview } = await draftMode();

  const context: ICmsContext = { locale, isPreview, adapterCode, rootEntityId: id };
  const adapter = getAdapter(adapterCode);

  const page = await adapter.getPageById(id, context);

  if (!page) {
    return <NotFound />;
  }

  return (
    <section className="@container">
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
        <RootEntityRender context={context} blocks={page.data.blocks} adapterCode={adapterCode} />
      </div>
    </section>
  );
}

export const generateMetadata = async ({ params }: CmsPageProps) => {
  const { locale, adapter: adapterCode, id } = await params;
  const { isEnabled: isPreview } = await draftMode();

  const context: ICmsContext = { locale, isPreview, adapterCode, rootEntityId: id };

  const adapter = getAdapter(adapterCode);
  const page = await adapter.getPageById(id, context);

  return {
    title: page?.data.title,
    description: page?.data.seoDescription,
    keywords: page?.data.seoKeywords,
  };
};
