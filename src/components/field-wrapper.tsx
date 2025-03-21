import React, { PropsWithChildren } from 'react';

import getAdapter from '../service/get-adapter';
import { IBlockProps } from '../types';

export interface IFieldWrapperProps {
  blockProps: IBlockProps<any>;
  fieldId: string;
}

const FieldWrapper: React.FC<PropsWithChildren<IFieldWrapperProps>> = ({
  children,
  fieldId,
  blockProps: {
    locale,
    block: { id },
    isDraftEnabled,
    adapterCode,
  },
}) => {
  const adapter = getAdapter(adapterCode);

  if (!adapter.FieldWrapper) {
    return children;
  }

  return (
    <adapter.FieldWrapper
      blockId={id}
      fieldId={fieldId}
      isDraftEnabled={isDraftEnabled}
      locale={locale}
    >
      {children}
    </adapter.FieldWrapper>
  );
};

export default FieldWrapper;
