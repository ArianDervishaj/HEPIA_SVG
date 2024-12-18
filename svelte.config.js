import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapterStatic({
			fallback: 'index.html'
		}),
		
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/HEPIA_SVG' : ''
		},
		prerender: {
			entries: ['*'] // Prerender all routes
		}
	}
};

export default config;
