import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Use adapter-static for GitHub Pages deployment
		adapter: adapterStatic(),

		// Ensure correct base path for GitHub Pages deployment
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/HEPIA_SVG' : ''
		},

		// Prerender all pages for static output
		prerender: {
			default: true
		},

		// Override to disable trailing slashes if needed (optional)
		trailingSlash: 'ignore'
	}
};

export default config;
