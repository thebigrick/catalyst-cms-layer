import { NextRequest } from 'next/server';

const getPathWithoutLocale = (request: NextRequest): string => {
  const locale = request.headers.get('x-bc-locale') ?? '';
  const path = request.nextUrl.pathname;

  if (path.startsWith(`/${locale}/`) || path === `/${locale}`) {
    return path.replace(`/${locale}`, '');
  }

  return path;
};

export default getPathWithoutLocale;
