import adapters from '../../adapters';
import { IBlock, IBlockCategoryPageData, IBlockProductPageData, ICmsContext } from '../../types';

export interface IAdapterCodeAndProduct {
  adapterCode: string;
  product: IBlock<IBlockProductPageData>;
}

const getAdapterCodeAndProduct = async (
  slug: number,
  context: Omit<ICmsContext, 'adapterCode' | 'rootEntityId'>,
): Promise<IAdapterCodeAndProduct | null> => {
  for (const [adapterCode, adapter] of Object.entries(adapters)) {
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
