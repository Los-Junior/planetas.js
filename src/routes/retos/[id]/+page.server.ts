import { error } from '@sveltejs/kit';
import type { ServerLoadEvent } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, locals }: ServerLoadEvent) {
	if (!params.id) {
		throw error(404, 'Not found');
	}

	const session = locals.getSession();

	return { id: params.id, session };
}

export const ssr = false;
