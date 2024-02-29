import { sveltekit } from "@sveltejs/kit/vite"

/** @type {import("vite").UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			"@gouvfr/dsfr": "/workspaces/svelte_site_viz/node_modules/@gouvfr/dsfr",
		}
	}
}

export default config


