import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import mdx from '@mdx-js/rollup';
import highlight from 'rehype-highlight';
const prefix = `monaco-editor/esm/vs`;

const config: UserConfig = {
	plugins: [
		sveltekit(),
		{ enforce: 'pre', ...mdx({ rehypePlugins: [highlight], jsxImportSource: 'svelte-jsx' }) }
	],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					jsonWorker: [`${prefix}/language/json/json.worker`],
					cssWorker: [`${prefix}/language/css/css.worker`],
					htmlWorker: [`${prefix}/language/html/html.worker`],
					tsWorker: [`${prefix}/language/typescript/ts.worker`],
					editorWorker: [`${prefix}/editor/editor.worker`]
				}
			}
		}
	}
};

export default config;
