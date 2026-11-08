import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

export default defineConfig({
  plugins: [sveltekit({ adapter: adapter({ pages: 'build', assets: 'build', fallback: '404.html' }) })]
});
