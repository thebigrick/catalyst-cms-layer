import React from 'react';

import { IBlockProps } from '../types';

import BlocksRegistry from './blocks-registry';

const getBlockByType = (type: string): React.FC<IBlockProps> => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (BlocksRegistry[type] === undefined) {
    throw new Error(`Block type "${type}" not found in registry`);
  }

  return BlocksRegistry[type] as React.FC<IBlockProps>;
};

export default getBlockByType;
