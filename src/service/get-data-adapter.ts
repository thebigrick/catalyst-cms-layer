import dataAdapters from '../data-adapters';
import { ICmsDataAdapter } from '../types';

const getDataAdapter = (adapter: string): ICmsDataAdapter => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (dataAdapters[adapter] === undefined) {
    throw new Error(`Data adapter ${adapter} not found`);
  }

  return dataAdapters[adapter];
};

export default getDataAdapter;
