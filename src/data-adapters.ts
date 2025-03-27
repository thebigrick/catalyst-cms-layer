import { ICmsDataAdapter } from './types';

/**
 * This value is intended to be overridden by pluginizr
 */
const dataAdapters: Record<string, ICmsDataAdapter> = {};

export default dataAdapters;
