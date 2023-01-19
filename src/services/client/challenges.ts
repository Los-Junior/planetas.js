import type { ChallengeI } from '@/types';

export const getHomeChallenges = async () => {
	const res = await fetch(`/api/challenge?isHomePage=true`);

	if (!res.ok) {
		const txt = await res.text();
		throw new Error(txt);
	}

	const challenges = await res.json();
	console.log(challenges);
	return challenges;
};

export const getChallenge = async (id: string): Promise<ChallengeI> => {
	const res = await fetch(`/api/challenge?challengeId=${id}`);

	if (!res.ok) {
		const txt = await res.text();
		throw new Error(txt);
	}

	const challenge = await res.json();

	return challenge as ChallengeI;
};
