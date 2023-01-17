export interface Challenge {
	id: number;
	name: string;
	difficulty: string;
	image: string;
	description: string;
	solution: any;
	initialCode: string;
	language: string;
	testFile: string;
	fnInput: any;
}

export const DefaultChallenge: Challenge = {
	name: '',
	id: 0,
	image: '',
	difficulty: '',
	description: '',
	solution: '',
	initialCode: '',
	testFile: '',
	language: '',
	fnInput: ''
};
