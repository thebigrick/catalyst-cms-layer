import React, { PropsWithChildren } from 'react';

export type IGetPageIdBySlugAdapter = (
  slug: string,
  context: ICmsContext,
) => Promise<string | null>;
export type IGetPageByIdAdapter = (
  id: string,
  context: ICmsContext,
) => Promise<IBlock<IPageData> | null>;

export interface ICmsContext {
  rootEntityId: string;
  adapterCode: string;
  locale: string;
  isPreview: boolean;
}

export interface IBlock<TData = Record<string, any>> {
  type: string;
  id: string;
  data: TData;
}

export interface IPageData {
  id: string;
  title: string;
  seoDescription?: string;
  seoKeywords?: string;
  slug: string;
  blocks: IBlock[];
}

export interface IBlockGridData {
  columns: number;
  mdColumns: number;
  lgColumns: number;
  gap: number;
  blocks: IBlock[];
}
export interface IBlockCarouselData {
  blocks: IBlock[];
  showButtons?: boolean;
  showScrollbar?: boolean;
}
export interface IBlockImageData {
  src?: string;
  title: string;
  width?: number;
  height?: number;
}
export interface IBlockHtmlData {
  html: string;
}
export interface IBlockRichTextData {
  richText: unknown;
}
export interface IBlockProductsCarouselData {
  productIds: number[];
  showButtons?: boolean;
  showScrollbar?: boolean;
}

export interface IRichTextRendererProps<TDocument = any> {
  richText: TDocument;
}
export interface ICmsRootWrapperAdapter {
  context: ICmsContext;
}
export interface IFieldWrapperAdapter {
  context: ICmsContext;
  block: IBlock;
  fieldId: string;
}

export type IFieldWrapperPropsProvider = (
  block: IBlock,
  fieldId: string,
  context: ICmsContext,
) => Record<string, unknown>;

export interface ICmsAdapter {
  getPageIdBySlug: IGetPageIdBySlugAdapter;
  getPageById: IGetPageByIdAdapter;

  // Component to render richText
  RichTextRenderer?: React.FC<IRichTextRendererProps>;

  // Optional CMS context provider
  CmsRootWrapper?: React.FC<PropsWithChildren<ICmsRootWrapperAdapter>>;

  // Optional field wrapper component
  FieldWrapper?: React.FC<PropsWithChildren<IFieldWrapperAdapter>>;

  // Optional fields wrapper props provider (usually an alternative to FieldWrapper)
  fieldWrapperPropsProvider?: IFieldWrapperPropsProvider;
}

export interface IBlockProps<TData = Record<string, any>> {
  block: IBlock<TData>;
  context: ICmsContext;
}

export type ICmsComponentsRegistry = Record<string, React.FC<any>>;

export interface IBox {
  margin?: string;
  padding?: string;
  customClass?: string;
  customStyle?: string;
}
