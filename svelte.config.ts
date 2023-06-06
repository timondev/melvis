import type { Config } from '@sveltejs/kit';
import adapter from '@sveltejs/adapter-static';

const config: Config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true,
		})
	}
};

export default config;
