import React from 'react';

import { IBlock } from '../types';

import BlockRouter from './block-router';

export interface IChildrenBlocksProps {
  blocks: IBlock[];
  adapterCode: string;
  locale: string;
  isDraftEnabled: boolean;
}

const ChildrenBlocks: React.FC<IChildrenBlocksProps> = ({
  blocks,
  adapterCode,
  locale,
  isDraftEnabled,
}) => {
  return blocks.map((block, index) => (
    <BlockRouter
      adapterCode={adapterCode}
      block={block}
      isDraftEnabled={isDraftEnabled}
      key={index}
      locale={locale}
    />
  ));
};

export default ChildrenBlocks;
