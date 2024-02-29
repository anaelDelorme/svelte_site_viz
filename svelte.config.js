import mdsvex from "mdsvex"
import sveltePreprocess from "svelte-preprocess"
import adapter from "@sveltejs/adapter-static"
import mdsvexConfig from "./mdsvex.config.cjs"

/** @type {import('@sveltejs/kit').Config} */
export default {

	extensions: [
		".svelte", ...mdsvexConfig.extensions,
	],

	preprocess: [
		mdsvex.mdsvex(mdsvexConfig),
		sveltePreprocess(),
	],

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: "docs",
			assets: "docs",
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.BASE_URL || "",
		},
	},

}
