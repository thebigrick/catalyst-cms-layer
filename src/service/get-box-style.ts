import { CSSProperties } from 'react';

import { IBox } from '../types';

import parseStyle from './parse-style';

export interface BoxStyle {
  className?: string;
  styles: React.CSSProperties;
}

const parseShorthand = (
  value: string | number | Array<string | number> | undefined | null,
): string | undefined => {
  if (value === undefined || value === null) {
    return undefined;
  }

  if (Array.isArray(value)) {
    return value.map((val) => (typeof val === 'number' ? `${val}px` : val)).join(' ');
  }

  return typeof value === 'number' ? `${value}px` : value;
};

const getBoxStyle = (box?: IBox): BoxStyle => {
  const { padding, margin } = box ?? {};

  const styles: CSSProperties = {
    padding: parseShorthand(padding),
    margin: parseShorthand(margin),
    ...parseStyle(box?.customStyle),
  };

  return {
    className: box?.customClass || undefined,
    styles,
  };
};

export default getBoxStyle;
