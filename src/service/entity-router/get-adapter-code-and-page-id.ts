import edgeDataAdapters from '../../edge-data-adapters';
import { ICmsContext } from '../../types';

export interface IAdapterCodeAndPageId {
  adapterCode: string;
  pageId: string;
}

const getAdapterCodeAndPageId = async (
  slug: string,
  context: Omit<ICmsContext, 'adapterCode' | 'rootEntityId'>,
): Promise<IAdapterCodeAndPageId | null> => {
  for (const [adapterCode, adapter] of Object.entries(edgeDataAdapters)) {
    const adapterContext = {
      ...context,
      adapterCode,
    };

    const pageId = await adapter.getPageIdBySlug(slug, adapterContext);

    if (pageId) {
      return {
        adapterCode,
        pageId,
      };
    }
  }

  return null;
};

export default getAdapterCodeAndPageId;
