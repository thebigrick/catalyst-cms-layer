import Grid from '../blocks/grid';
import Html from '../blocks/html';
import Image from '../blocks/image';
import ProductsCarousel from '../blocks/products-carousel';
import RichText from '../blocks/rich-text';
import { ICmsComponentsRegistry } from '../types';

const BlocksRegistry: ICmsComponentsRegistry = {
  RichText,
  ProductsCarousel,
  Html,
  Image,
  Grid,
};

export default BlocksRegistry;
