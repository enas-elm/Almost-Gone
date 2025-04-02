import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - root (/) and product pages (/product/[product_id])
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|$|product/[^/]+$).*)",
  ],
};