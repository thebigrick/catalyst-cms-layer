import React from 'react';

import getAdapter from '../service/get-adapter';
import { IBlock, ICmsContext } from '../types';

import ChildrenBlocks from './children-block';
import Context from './context';

export interface IRootEntityRenderProps {
  adapterCode: string;
  context: ICmsContext;
  blocks: IBlock[];
}

const RootEntityRender: React.FC<IRootEntityRenderProps> = ({ adapterCode, context, blocks }) => {
  const adapter = getAdapter(adapterCode);

  return (
    <Context adapter={adapter} context={context}>
      <ChildrenBlocks blocks={blocks} context={context} />
    </Context>
  );
};

export default RootEntityRender;
