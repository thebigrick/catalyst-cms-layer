import dataAdapters from '../../data-adapters';
import { IBlock, IBlockCategoryPageData, ICmsContext } from '../../types';

export interface IAdapterCodeAndCategory {
  adapterCode: string;
  category: IBlock<IBlockCategoryPageData>;
}

const getAdapterCodeAndCategory = async (
  slug: number,
  context: Omit<ICmsContext, 'adapterCode' | 'rootEntityId'>,
): Promise<IAdapterCodeAndCategory | null> => {
  for (const [adapterCode, adapter] of Object.entries(dataAdapters)) {
    const adapterContext = {
      ...context,
      adapterCode,
    };

    const category = await adapter.getCategoryBySlug(slug, adapterContext);

    if (category) {
      return {
        adapterCode,
        category,
      };
    }
  }

  return null;
};

export default getAdapterCodeAndCategory;
