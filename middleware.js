import { auth } from "@/app/_lib/auth";

// Middleware for handling authentication.
export const middleware = auth;

// Configuration to apply middleware only to specific routes such "account".
export const config = {
  matcher: ["/account"],
};
