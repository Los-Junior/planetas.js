import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: UserConfig = {
	plugins: [sveltekit(), tsconfigPaths()],
	ssr: {
		noExternal: process.env.NODE_ENV === 'production' ? ['@carbon/charts', 'carbon-components'] : []
	},
	optimizeDeps: { include: ['@carbon/charts'] }
};

export default config;
