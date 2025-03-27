import edgeDataAdapters from '../data-adapters';
import { ICmsEdgeDataAdapter } from '../types';

const getEdgeDataAdapter = (adapter: string): ICmsEdgeDataAdapter => {
  if (!edgeDataAdapters.hasOwnProperty(adapter)) {
    throw new Error(`Edge data adapter ${adapter} not found`);
  }

  return edgeDataAdapters[adapter];
};

export default getEdgeDataAdapter;
