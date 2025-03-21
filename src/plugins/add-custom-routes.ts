import { withRoutes } from '@bigcommerce/catalyst-core/middlewares/with-routes';
import { functionPlugin } from '@thebigrick/catalyst-pluginizr';
import { NextResponse } from 'next/server';

import cmsRouter from '../service/cms-router';

const addCustomRoutes = functionPlugin<typeof withRoutes>({
  name: 'add-custom-routes',
  resourceId: '@bigcommerce/catalyst-core/middlewares/with-routes:withRoutes',
  wrap: (source, ...args) => {
    return async (request, event) => {
      // @ts-expect-error: Mismatching next types (FIX IT)
      const res = await cmsRouter(request);

      if (res) {
        return res;
      }

      return (await source(...args)(request, event)) as NextResponse;
    };
  },
});

export default addCustomRoutes;
