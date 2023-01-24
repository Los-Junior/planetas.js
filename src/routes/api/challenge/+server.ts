import { error, json } from '@sveltejs/kit';

import type { RequestHandler } from './$types';
import { Challenge } from '@/models/challenges';
import dbConnect from '@/config/dbConnect';
import { CreatedChallenge } from '@/models/challenges/created';

export const GET = (async ({ url }) => {
	await dbConnect();

	const isHomePage = url.searchParams.get('isHomePage');
	const challengeId = url.searchParams.get('challengeId');

	if (challengeId) {
		const c = await Challenge.findOne({ _id: challengeId });
		return json(c);
	}

	if (isHomePage) {
		const c = await Challenge.find({ isHomePage: true }).sort({ field: 'asc', order: 1 });
		return json(c);
	}

	const challenges = await Challenge.find({});
	return json(challenges);
}) satisfies RequestHandler;

export const POST = (async ({ request, locals }) => {
	await dbConnect();
	const body = await request.json();

	console.log(body);

	try {
		const session: any = await locals.getSession();
		if (!session || !session.user) {
			throw error(401, 'Unauthorized');
		}
		console.log(session);
		const challenge = await Challenge.create(body);
		await CreatedChallenge.create({ challenge: challenge._id, user: session.user.id });
		return json(challenge);
	} catch (err) {
		throw error(400, 'Bad request');
	}
}) satisfies RequestHandler;
