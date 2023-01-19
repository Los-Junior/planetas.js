import NextAuth, { DefaultSession } from 'next-auth';

export interface Session {
	user: DefaultSession['user'];
}
