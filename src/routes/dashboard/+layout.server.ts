import dbConnect from '@/config/dbConnect';
import { Challenge, CompletedChallenge } from '@/models/challenges';
import { UserLastSeen } from '@/models/user/lastSeen';
import { Personal } from '@/models/user/personal';
import { UserProfile } from '@/models/user/profile';
import type { LayoutServerLoad } from '../$types';

export const load: LayoutServerLoad = async (event) => {
	const session = (await event.locals.getSession()) as any;

	await dbConnect();

	const completed = await CompletedChallenge.find({ user: session.user.id }).populate({
		path: 'challenge',
		model: Challenge
	});
	const profile = await UserProfile.findOne({ user: session.user.id }).populate({
		path: 'personal',
		model: Personal
	});
	let platform = 0;
	let community = 0;
	for (let c of completed) {
		if (c.challenge.isHomePage) platform++;
		else community++;
	}

	return {
		session,
		profile: JSON.parse(JSON.stringify(profile)),
		cards: createCards(platform, community, 0),
		joined: session.user.createdAt
	};
};

const createCards = (platformCount: number, communityCount: number, createdCount: number) => {
	return [
		{
			id: 1,
			count: platformCount,
			title: 'Retos de la plataforma finalizados',
			description: `He completado <a href='/retos'><span class="hover:underline">${platformCount} reto${
				platformCount === 1 ? '' : 's'
			}</span></a>  de la plataforma.`,
			href: `/retos`,
			cta: 'Resolver retos'
		},
		{
			id: 2,
			count: communityCount,
			title: 'Retos de la comunidad finalizados',
			description: `He completado ${communityCount} reto${
				communityCount === 1 ? '' : 's'
			} de la comunidad.`,
			href: `/retos`,
			cta: 'Ver retos de la comunidad'
		},
		{
			id: 3,
			count: createdCount,
			title: 'Retos creados',
			description: `He creado ${createdCount} reto${
				createdCount === 1 ? '' : 's'
			} en la plataforma.`,
			href: `/retos/crear`,
			cta: 'Crear reto'
		},
		{
			id: 4,
			count: 0,
			title: 'Únete a Los Junior',
			description: `Únete a la comunidad y avancemos juntos.`,
			href: `https://losjunior.co/`,
			cta: 'Unirme'
		}
	];
};
