import { useMemo } from 'react';

import getBoxStyle from '../service/get-box-style';
import { IBox } from '../types';

const useBoxStyle = (box?: IBox) => {
  const serializedBox = JSON.stringify(box);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => getBoxStyle(box), [serializedBox]);
};

export default useBoxStyle;
