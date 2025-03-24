import React from 'react';

import { IBlock, ICmsContext } from '../types';

import BlockRouter from './block-router';

export interface IChildrenBlocksProps {
  blocks: IBlock[];
  context: ICmsContext;
}

const ChildrenBlocks: React.FC<IChildrenBlocksProps> = ({ blocks, context }) => {
  return blocks.map((block, index) => <BlockRouter block={block} context={context} key={index} />);
};

export default ChildrenBlocks;
