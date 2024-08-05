import { authMiddleware } from "@clerk/nextjs/server";

// Configure the authentication middleware
export default authMiddleware({
    // Define public routes that do not require authentication

    publicRoutes: ["/",
      "/api/webhooks(.*)"]
});

// Export the configuration for the middleware matcher
export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Match all routes except for those with a dot (.) or starting with _next
    "/", // Match the root route
    "/(api|trpc)(.*)" // Match routes starting with /api or /trpc
  ],
};
