import dbConnect from '@/config/dbConnect';
import type { RequestHandler } from '@sveltejs/kit';

export const GET = (async ({ params, locals }) => {
	const session = await locals.getSession();
	await dbConnect();

	return new Response();
}) satisfies RequestHandler;
