import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: UserConfig = {
	plugins: [sveltekit(), tsconfigPaths()]
};

export default config;
