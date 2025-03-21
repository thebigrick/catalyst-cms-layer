import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import useBoxStyle from '../hooks/use-box-style';
import { IBlockProps, IBox } from '../types';

export interface IBoxProps
  extends Omit<IBlockProps<IBox>, 'adapterCode' | 'locale' | 'isDraftEnabled'> {
  className?: string;
}

const Box: React.FC<PropsWithChildren<IBoxProps>> = ({ block, children, className }) => {
  const boxStyle = useBoxStyle(block.data);

  return (
    <div className={clsx(boxStyle.className, className)} style={boxStyle.styles}>
      {children}
    </div>
  );
};

export default Box;
