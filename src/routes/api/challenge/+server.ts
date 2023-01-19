import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { Challenge } from '@/models/challenges';
import dbConnect from '@/config/dbConnect';

export const GET = (async ({ url }) => {
	await dbConnect();

	const isHomePage = url.searchParams.get('isHomePage');
	const challengeId = url.searchParams.get('challengeId');

	if (challengeId) {
		const c = await Challenge.findOne({ _id: challengeId });
		return new Response(JSON.stringify(c));
	}

	if (isHomePage) {
		const c = await Challenge.find({ isHomePage: true }).sort({ field: 'asc', order: 1 });
		return new Response(JSON.stringify(c));
	}

	const challenges = await Challenge.find({});
	return new Response(JSON.stringify('challenges'));
}) satisfies RequestHandler;
