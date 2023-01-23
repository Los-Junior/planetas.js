import { ChallengeDifficulties } from '@/types';
import { writable } from 'svelte/store';

export const argumentsStore = writable<Array<any>>([]);
