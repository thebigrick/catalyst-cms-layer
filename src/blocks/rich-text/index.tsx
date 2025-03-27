'use client';

import React from 'react';

import Box from '../../components/box';
import FieldWrapper from '../../components/field-wrapper';
import getComponentsAdapter from '../../service/get-components-adapter';
import getWrapperPropsProvider from '../../service/get-wrapper-props-provider';
import { IBlockProps, IBlockRichTextData, IBox } from '../../types';

export interface IRichTextProps extends IBlockProps<IBox & IBlockRichTextData> {}

const RichText: React.FC<IRichTextProps> = (props) => {
  const {
    block,
    context,
    block: {
      data: { richText },
    },
  } = props;

  const Renderer = getComponentsAdapter(context.adapterCode).RichTextRenderer;

  if (!Renderer) return null;

  return (
    <FieldWrapper blockProps={props} fieldId="richText">
      <Box block={block} wrapperProps={getWrapperPropsProvider(block, context, 'richText')}>
        <Renderer richText={richText} />
      </Box>
    </FieldWrapper>
  );
};

export default RichText;
