import { cache } from 'react';

import { IBlock, ICmsContext } from '../types';

import getAdapter from './get-adapter';

const getWrapperPropsProvider = cache(
  (block: IBlock, context: ICmsContext, fieldId: string): Record<string, any> => {
    const { adapterCode } = context;

    const adapter = getAdapter(adapterCode);

    if (!adapter.fieldWrapperPropsProvider) {
      return {};
    }

    return adapter.fieldWrapperPropsProvider(block, fieldId, context);
  },
);

export default getWrapperPropsProvider;
