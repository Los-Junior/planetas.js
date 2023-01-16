import { error } from '@sveltejs/kit';

import type { RequestHandler } from './$types';
export const GET = (({ request }) => {
	return new Response(JSON.stringify({ mensaje: 'Hola desde la API', request }));
}) satisfies RequestHandler;

export const POST = (({ request }) => {
	const { body } = request;

	return new Response();
}) satisfies RequestHandler;
