import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '@/config/mongoDbAdapter';
import { sequence } from '@sveltejs/kit/hooks';
import dbConnect from '@/config/dbConnect';
import { protectRoutes } from '@/lib/server/protectRoutes';
import { UserProfile } from './models/user/profile';

export const handle = sequence(
	SvelteKitAuth({
		providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }) as any],
		adapter: MongoDBAdapter(clientPromise),
		callbacks: {
			session({ session, user }) {
				return { ...session, user: { ...session.user, id: user.id } };
			}
		},
		session: {
			// fix from: https://github.com/nextauthjs/next-auth/discussions/6074
			generateSessionToken: () => {
				return crypto.randomUUID();
			}
		},
		events: {
			createUser: async ({ user }) => {
				await dbConnect();
				await UserProfile.createNew(user.id);
			},
			session: async ({ session }) => {
				const user = session?.user as any;
				await dbConnect();
				//@ts-ignore
				await UserProfile.updateLastSeen(user.id);
			}
		}
	}),
	protectRoutes
);
