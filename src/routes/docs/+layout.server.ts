import type { LayoutServerLoad } from '../$types';
import { readFile } from 'fs/promises';
import { resolve } from 'path';
export const load = (async (event) => {
	const session = await event.locals.getSession();

	if (!event.params.page) event.params.page = 'home';

	try {
		const path = resolve('src/data/docs', `${event.params.page}.md`);
		const content = await readFile(path, 'utf-8');

		return {
			md: content,
			session
		};
	} catch (err) {
		return { session };
	}
}) satisfies LayoutServerLoad;
