import dataAdapters from '../../data-adapters';
import { IBlock, IBlockProductPageData, ICmsContext } from '../../types';

export interface IAdapterCodeAndProduct {
  adapterCode: string;
  product: IBlock<IBlockProductPageData>;
}

const getAdapterCodeAndProduct = async (
  slug: number,
  context: Omit<ICmsContext, 'adapterCode' | 'rootEntityId'>,
): Promise<IAdapterCodeAndProduct | null> => {
  for (const [adapterCode, adapter] of Object.entries(dataAdapters)) {
    const adapterContext = {
      ...context,
      adapterCode,
    };

    const product = await adapter.getProductBySlug(slug, adapterContext);

    if (product) {
      return {
        adapterCode,
        product,
      };
    }
  }

  return null;
};

export default getAdapterCodeAndProduct;
