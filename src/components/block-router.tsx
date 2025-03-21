import React from 'react';

import getBlockByType from '../service/get-block-by-type';
import { IBlock } from '../types';

export interface IBlockRouterProps {
  block: IBlock;
  adapterCode: string;
  locale: string;
  isDraftEnabled: boolean;
}

const BlockRouter: React.FC<IBlockRouterProps> = ({
  block,
  adapterCode,
  locale,
  isDraftEnabled,
}) => {
  const { type } = block;

  const Component = getBlockByType(type);

  return (
    <Component
      adapterCode={adapterCode}
      block={block}
      isDraftEnabled={isDraftEnabled}
      locale={locale}
    />
  );
};

export default BlockRouter;
