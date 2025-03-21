import BlocksRegistry from './blocks-registry';

const getBlockByType = (type: string) => {
  if (!(type in BlocksRegistry)) {
    throw new Error(`Block type "${type}" not found in registry`);
  }

  return BlocksRegistry[type];
};

export default getBlockByType;
