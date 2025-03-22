import React, { PropsWithChildren } from 'react';

export type IGetPageIdBySlugAdapter = (
  slug: string,
  locale: string,
  isPreview: boolean,
) => Promise<string | null>;
export type IGetPageByIdAdapter = (
  id: string,
  locale: string,
  isPreview: boolean,
) => Promise<IBlock<IPageData> | null>;

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
}

export interface IRichTextRendererProps<TDocument = any> {
  richText: TDocument;
}
export interface ICmsContextAdapter {
  locale: string;
  isDraftEnabled: boolean;
}
export interface IFieldWrapperAdapter {
  locale: string;
  isDraftEnabled: boolean;
  blockId: string;
  fieldId: string;
}

export interface ICmsAdapter {
  getPageIdBySlug: IGetPageIdBySlugAdapter;
  getPageById: IGetPageByIdAdapter;
  RichTextRenderer?: React.FC<IRichTextRendererProps>;
  Context?: React.FC<PropsWithChildren<ICmsContextAdapter>>;
  FieldWrapper?: React.FC<PropsWithChildren<IFieldWrapperAdapter>>;
}

export interface IBlockProps<TData = Record<string, unknown>> {
  block: IBlock<TData>;
  adapterCode: string;
  locale: string;
  isDraftEnabled: boolean;
}

export type ICmsComponentsRegistry = Record<string, React.FC<any>>;

export interface IBox {
  margin?: string;
  padding?: string;
  customClass?: string;
  customStyle?: string;
}
