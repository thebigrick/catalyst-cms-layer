import clsx from 'clsx';
import React from 'react';

import Box from '../../components/box';
import ChildrenBlocks from '../../components/children-block';
import FieldWrapper from '../../components/field-wrapper';
import getWrapperPropsProvider from '../../service/get-wrapper-props-provider';
import { IBlockGridData, IBlockProps, IBox } from '../../types';

export interface IGridProps extends IBlockProps<IBox & IBlockGridData> {}

const gridColsMapping: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
};

const mdGridColsMapping: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
  7: 'md:grid-cols-7',
  8: 'md:grid-cols-8',
  9: 'md:grid-cols-9',
  10: 'md:grid-cols-10',
  11: 'md:grid-cols-11',
  12: 'md:grid-cols-12',
};

const lgGridColsMapping: Record<number, string> = {
  1: 'xl:grid-cols-1',
  2: 'xl:grid-cols-2',
  3: 'xl:grid-cols-3',
  4: 'xl:grid-cols-4',
  5: 'xl:grid-cols-5',
  6: 'xl:grid-cols-6',
  7: 'xl:grid-cols-7',
  8: 'xl:grid-cols-8',
  9: 'xl:grid-cols-9',
  10: 'xl:grid-cols-10',
  11: 'xl:grid-cols-11',
  12: 'xl:grid-cols-12',
};

const gapMapping: Record<number, string> = {
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
};

const Grid: React.FC<IGridProps> = (props) => {
  const {
    context,
    block,
    block: {
      data: { columns, blocks, mdColumns, lgColumns, gap },
    },
  } = props;

  const baseColsClass = gridColsMapping[columns] || 'grid-cols-1';
  const mdColsClass = mdGridColsMapping[mdColumns] || '';
  const lgColsClass = lgGridColsMapping[lgColumns] || '';
  const gapClass = gapMapping[gap] || '';

  return (
    <FieldWrapper blockProps={props} fieldId="blocks">
      <Box
        block={block}
        className={clsx('grid', baseColsClass, mdColsClass, lgColsClass, gapClass)}
        wrapperProps={getWrapperPropsProvider(block, context, 'blocks')}
      >
        <ChildrenBlocks blocks={blocks} context={context} />
      </Box>
    </FieldWrapper>
  );
};

export default Grid;
