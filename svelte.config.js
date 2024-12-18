import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapterNode(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/HEPIA_SVG' : ''
		}
	}
};

export default config;
