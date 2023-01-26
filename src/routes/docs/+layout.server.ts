import type { LayoutServerLoad } from '../$types';
import { readFile } from 'fs/promises';
export const load = (async (event) => {
	const session = await event.locals.getSession();

	if (!event.params.page) event.params.page = 'home';

	try {
		const content = await readFile(paths[event.params.page as keyof typeof paths], 'utf-8');

		return {
			md: content,
			session
		};
	} catch (err) {
		return { session };
	}
}) satisfies LayoutServerLoad;

const root = './src/data/docs';

const paths = {
	home: `${root}/home.md`,
	tests: `${root}/tests.md`,
	argumentos: `${root}/argumentos.md`,
	retos: `${root}/retos.md`,
	'funcion-inicial': `${root}/funcion-inicial.md`
};
