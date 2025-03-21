'use client';

import React from 'react';

import Box from '../../components/box';
import FieldWrapper from '../../components/field-wrapper';
import getAdapter from '../../service/get-adapter';
import { IBlockProps, IBlockRichTextData, IBox } from '../../types';

export interface IRichTextProps extends IBlockProps<IBox & IBlockRichTextData> {}

const RichText: React.FC<IRichTextProps> = (props) => {
  const {
    block,
    adapterCode,
    block: {
      data: { richText },
    },
  } = props;

  const Renderer = getAdapter(adapterCode).RichTextRenderer;

  if (!Renderer) return null;

  return (
    <FieldWrapper blockProps={props} fieldId="richText">
      <Box block={block}>
        <Renderer richText={richText} />
      </Box>
    </FieldWrapper>
  );
};

export default RichText;
