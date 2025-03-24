import clsx from 'clsx';
import NextImage from 'next/image';
import React from 'react';

import FieldWrapper from '../../components/field-wrapper';
import getBoxStyle from '../../service/get-box-style';
import getWrapperPropsProvider from '../../service/get-wrapper-props-provider';
import { IBlockImageData, IBlockProps, IBox } from '../../types';

export interface IImageProps extends IBlockProps<IBlockImageData & IBox> {}

const Image: React.FC<IImageProps> = (props) => {
  const {
    block,
    context,
    block: {
      data: { src, title, width, height },
    },
  } = props;

  const wrapperProps = getWrapperPropsProvider(block, context, 'src');

  const boxStyle = getBoxStyle(block.data);

  return (
    <FieldWrapper blockProps={props} fieldId="src">
      {!!src && (
        <NextImage
          alt={title}
          {...wrapperProps}
          className={clsx('w-full', boxStyle.className, wrapperProps.className as string)}
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
