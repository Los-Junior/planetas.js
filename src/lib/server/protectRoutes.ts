import { redirect, type Handle } from '@sveltejs/kit';

export const protectRoutes: Handle = async ({ event, resolve }) => {
	const path = event.url.pathname;

	if (isProtected(path)) {
		const session = await event.locals.getSession();
		if (!session) {
			throw redirect(302, '/login');
		}
	}

	const result = await resolve(event, {
		transformPageChunk: ({ html }) => html
	});
	return result;
};

const isProtected = (path: string) => {
	const protectedRoutes = ['/dashboard', `/retos/nuevo`, '/api/user'];
	return protectedRoutes.includes(path);
};
