import { NextRequest, NextResponse } from 'next/server';

const locales = ['en-US', 'pt-BR']
const defaultLocale = 'en-US'

export function middleware (request: NextRequest) {
  const locale = defaultLocale;

  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
 
  if (pathnameHasLocale) return;

  request.nextUrl.pathname = locale;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Only run on root (/) URL
    '/'
  ],
}