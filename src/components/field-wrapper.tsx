import React, { PropsWithChildren } from 'react';

import getAdapter from '../service/get-adapter';
import getWrapperPropsProvider from '../service/get-wrapper-props-provider';
import { IBlockProps } from '../types';

export interface IFieldWrapperProps {
  blockProps: IBlockProps;
  fieldId: string;
  fallbackDiv?: boolean;
}

const FieldWrapper: React.FC<PropsWithChildren<IFieldWrapperProps>> = ({
  children,
  fieldId,
  blockProps: { block, context },
  fallbackDiv = false,
}) => {
  const adapter = getAdapter(context.adapterCode);

  if (!adapter.FieldWrapper) {
    if (!fallbackDiv) {
      return children;
    }

    return <div {...getWrapperPropsProvider(block, context, fieldId)}>{children}</div>;
  }

  return (
    <adapter.FieldWrapper block={block} context={context} fieldId={fieldId}>
      {children}
    </adapter.FieldWrapper>
  );
};

export default FieldWrapper;
