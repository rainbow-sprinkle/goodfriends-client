import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
	server: {
		port: 5183
	},
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	// resolve: {
	// 	alias: {
	// 	  'imgs': fileURLToPath(new URL('./imgs', import.meta.url))
	// 	}
	//   }
});
