import clsx from 'clsx';
import NextImage from 'next/image';
import React from 'react';

import FieldWrapper from '../../components/field-wrapper';
import getBoxStyle from '../../service/get-box-style';
import { IBlockImageData, IBlockProps, IBox } from '../../types';

export interface IImageProps extends IBlockProps<IBlockImageData & IBox> {}

const Image: React.FC<IImageProps> = (props) => {
  const {
    block,
    block: {
      data: { src, title, width, height },
    },
  } = props;

  const boxStyle = getBoxStyle(block.data);

  return (
    <FieldWrapper blockProps={props} fieldId="src">
      {!!src && (
        <NextImage
          alt={title}
          className={clsx('w-full', boxStyle.className)}
          height={height ?? 800}
          sizes="100%"
          src={src}
          style={boxStyle.styles}
          width={width ?? 800}
        />
      )}
    </FieldWrapper>
  );
};

export default Image;
