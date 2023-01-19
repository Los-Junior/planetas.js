import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from './config/mongoDbAdapter';

export const handle = SvelteKitAuth({
	providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }) as any],
	adapter: MongoDBAdapter(clientPromise),
	callbacks: {
		session({ session, user }) {
			return { ...session, user: { ...session.user, id: user.id } };
		}
	}
});
