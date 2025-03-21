import adapters from '../adapters';
import { ICmsAdapter } from '../types';

const getAdapter = (adapter: string): ICmsAdapter => {
  if (!adapters.hasOwnProperty(adapter)) {
    throw new Error(`Adapter ${adapter} not found`);
  }

  return adapters[adapter];
};

export default getAdapter;
