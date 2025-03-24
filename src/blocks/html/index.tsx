import parse from 'html-react-parser';
import React from 'react';

import FieldWrapper from '../../components/field-wrapper';
import { IBlockHtmlData, IBlockProps } from '../../types';

export interface IProductsCarouselProps extends IBlockProps<IBlockHtmlData> {}

const Html: React.FC<IProductsCarouselProps> = (props) => {
  const {
    block: {
      data: { html },
    },
  } = props;

  if (!html) {
    return null;
  }

  return (
    <FieldWrapper blockProps={props} fallbackDiv={true} fieldId="html">
      {parse(html)}
    </FieldWrapper>
  );
};

export default Html;
