import { writable } from 'svelte/store';

interface User {
	image: string;
}

export const userStore = writable<null | User>(null);
