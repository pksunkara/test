import { lazy } from 'react';

import { routes as authRoutes } from 'auth';
import type { Route } from 'shared';

const routes = [
  {
    Component: lazy(() => import('views/Home')),
    path: '',
  },
  ...authRoutes,
] as Route[];

export default routes;
