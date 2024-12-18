import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},

	ssr: {
		// Exclude 'fs' and 'path' during SSR to prevent bundling errors
		external: ['fs', 'path']
	}
});
