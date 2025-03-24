import React, { PropsWithChildren } from 'react';

import { ICmsAdapter, ICmsContext } from '../types';

export interface IContextProps {
  adapter: ICmsAdapter;
  context: ICmsContext;
}

const Context: React.FC<PropsWithChildren<IContextProps>> = ({ children, adapter, context }) => {
  if (!adapter.CmsRootWrapper) {
    return children;
  }

  return <adapter.CmsRootWrapper context={context}>{children}</adapter.CmsRootWrapper>;
};

export default Context;
