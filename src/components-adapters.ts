import { ICmsComponentsAdapter } from './types';

/**
 * This value is intended to be overridden by pluginizr
 */
const componentsAdapters: Record<string, ICmsComponentsAdapter> = {};

export default componentsAdapters;
