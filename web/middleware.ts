import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { middleware as i18nMiddleware } from "./lib/i18n"
const isProtectedRoute = createRouteMatcher(["dashboard/(.*)"])

export default clerkMiddleware((auth, req, event) => {
	if (isProtectedRoute(req)) auth().protect()
	return i18nMiddleware(req)
})

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
}
