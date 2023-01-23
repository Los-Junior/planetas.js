import type { LayoutServerLoad } from '../$types';
import { readFile } from 'fs/promises';
export const load = (async (event) => {
	const session = await event.locals.getSession();

	const content = await readFile('./static/docs/Homepage.md', 'utf-8');

	return {
		md: content,
		session
	};
}) satisfies LayoutServerLoad;
