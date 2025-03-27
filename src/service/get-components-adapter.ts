import componentsAdapters from '../components-adapters';
import { ICmsComponentsAdapter } from '../types';

const adapters: Record<string, ICmsComponentsAdapter> = componentsAdapters;

const getComponentsAdapter = (adapter: string): ICmsComponentsAdapter => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (adapters[adapter] === undefined) {
    throw new Error(`Components adapter ${adapter} not found`);
  }

  return adapters[adapter];
};

export default getComponentsAdapter;
