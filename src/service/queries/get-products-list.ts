import { removeEdgesAndNodes } from '@bigcommerce/catalyst-client';
import { getSessionCustomerAccessToken } from '@bigcommerce/catalyst-core/auth';
import { client } from '@bigcommerce/catalyst-core/client';
import { graphql } from '@bigcommerce/catalyst-core/client/graphql';
import { revalidate } from '@bigcommerce/catalyst-core/client/revalidate-target';
import { ProductCardFragment } from '@bigcommerce/catalyst-core/components/product-card/fragment';
import { productCardTransformer } from '@bigcommerce/catalyst-core/data-transformers/product-card-transformer';
import { getPreferredCurrencyCode } from '@bigcommerce/catalyst-core/lib/currency';
import { CardProduct } from '@current-vibe/primitives/product-card';
import { getFormatter } from 'next-intl/server';
import { cache } from 'react';

export const ProductsQuery = graphql(
  `
    query ProductsQuery($entityIds: [Int!], $currencyCode: currencyCode) {
      site {
        products(entityIds: $entityIds) {
          edges {
            node {
              ...ProductCardFragment
            }
          }
        }
      }
    }
  `,
  [ProductCardFragment],
);

const getProductsList = cache(async (entityIds: number[]): Promise<CardProduct[]> => {
  const customerAccessToken = await getSessionCustomerAccessToken();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const currencyCode = await getPreferredCurrencyCode();
  const format = await getFormatter();

  const response = await client.fetch({
    document: ProductsQuery,
    variables: {
      entityIds,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      currencyCode,
    },
    customerAccessToken,
    fetchOptions: customerAccessToken ? { cache: 'no-store' } : { next: { revalidate } },
  });

  const products = productCardTransformer(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    removeEdgesAndNodes((response.data as any).site.products),
    format,
  );

  return products.sort((a, b) => entityIds.indexOf(Number(a.id)) - entityIds.indexOf(Number(b.id)));
});

export default getProductsList;
