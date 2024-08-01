const { withNextJSRouteTypes } = require("nextjs-route-types")
const { paraglide } = require("@inlang/paraglide-next/plugin")

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	typescript: {
		ignoreBuildErrors: true
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	images: {
		remotePatterns: [{ protocol: "https", hostname: "**" }]
	},
	experimental: {
		serverActions: {
			bodySizeLimit: "5mb"
		}
	},
	clerk: {
		publicRoutes: ["/", "/:lang", "/:lang/sign-in", "/:lang/sign-up"]
	}
}

module.exports = paraglide({
	paraglide: {
		outdir: "./paraglide",
		project: "./project.inlang"
	},
	...nextConfig
})
