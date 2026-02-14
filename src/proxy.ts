import { neonAuthMiddleware } from "@neondatabase/auth/next/server";

export default neonAuthMiddleware({
  loginUrl: "/auth/sign-in",

});

export const config = {
  // Protect everything EXCEPT the public paths and static files
  matcher: ["/dashboard/:path*","/builder/:path*","/account/:path*"],
};