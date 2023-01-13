import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import mdx from '@mdx-js/rollup';
import highlight from 'rehype-highlight';
const config: UserConfig = {
	plugins: [
		sveltekit(),
		{ enforce: 'pre', ...mdx({ rehypePlugins: [highlight], jsxImportSource: 'svelte-jsx' }) }
	]
};

export default config;
