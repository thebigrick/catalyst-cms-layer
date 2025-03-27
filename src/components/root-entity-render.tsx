import React from 'react';

import getComponentsAdapter from '../service/get-components-adapter';
import getDataAdapter from '../service/get-data-adapter';
import { IBlock, ICmsContext } from '../types';

import ChildrenBlocks from './children-block';
import Context from './context';

export interface IRootEntityRenderProps {
  adapterCode: string;
  context: ICmsContext;
  blocks: IBlock[];
}

const RootEntityRender: React.FC<IRootEntityRenderProps> = ({ adapterCode, context, blocks }) => {
  const adapter = getComponentsAdapter(adapterCode);

  return (
    <Context adapter={adapter} context={context}>
      <ChildrenBlocks blocks={blocks} context={context} />
    </Context>
  );
};

export default RootEntityRender;
