import { ICmsEdgeDataAdapter } from './types';

/**
 * This value is intended to be overridden by pluginizr
 */
const edgeDataAdapters: Record<string, ICmsEdgeDataAdapter> = {};

export default edgeDataAdapters;
