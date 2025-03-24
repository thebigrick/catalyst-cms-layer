import React from 'react';

import getBlockByType from '../service/get-block-by-type';
import { IBlock, ICmsContext } from '../types';

export interface IBlockRouterProps {
  block: IBlock;
  context: ICmsContext;
}

const BlockRouter: React.FC<IBlockRouterProps> = ({ block, context }) => {
  const { type } = block;

  const Component = getBlockByType(type);

  return <Component block={block} context={context} />;
};

export default BlockRouter;
