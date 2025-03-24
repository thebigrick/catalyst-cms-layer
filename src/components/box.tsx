import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import useBoxStyle from '../hooks/use-box-style';
import { IBlockProps, IBox } from '../types';

export interface IBoxProps extends Omit<IBlockProps<IBox>, 'context'> {
  className?: string;
  wrapperProps?: Record<string, any>;
}

const Box: React.FC<PropsWithChildren<IBoxProps>> = ({
  block,
  children,
  className,
  wrapperProps,
}) => {
  const boxStyle = useBoxStyle(block.data);

  return (
    <div
      {...wrapperProps}
      className={clsx(boxStyle.className, className, wrapperProps?.className as string)}
      style={boxStyle.styles}
    >
      {children}
    </div>
  );
};

export default Box;
