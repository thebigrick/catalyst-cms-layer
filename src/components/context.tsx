import React, { PropsWithChildren } from 'react';

import { ICmsAdapter } from '../types';

export interface IContextProps {
  adapter: ICmsAdapter;
  locale: string;
  isDraftEnabled: boolean;
}

const Context: React.FC<PropsWithChildren<IContextProps>> = ({
  children,
  adapter,
  locale,
  isDraftEnabled,
}) => {
  if (!adapter.Context) {
    return children;
  }

  return (
    <adapter.Context isDraftEnabled={isDraftEnabled} locale={locale}>
      {children}
    </adapter.Context>
  );
};

export default Context;
