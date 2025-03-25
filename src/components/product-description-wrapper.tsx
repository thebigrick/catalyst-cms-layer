import { PluginComponentWrapper } from '@thebigrick/catalyst-pluginizr';
import { getTranslations } from 'next-intl/server';

const ProductDescriptionWrapper: PluginComponentWrapper<typeof Description> = async ({
  WrappedComponent,
  product,
}) => {
  const t = await getTranslations('Product.Description');

  return null;
};

export default ProductDescriptionWrapper;
