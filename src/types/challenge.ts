export interface ChallengeI {
	id: number;
	name: string;
	difficulty: string;
	image: string;
	description: string;
	initialCode: string;
	language: string;
	testFile: string;
	fnResult: string;
	fnInput: any;
}

export const DefaultChallenge: ChallengeI = {
	name: '',
	id: 0,
	image: '',
	difficulty: '',
	description: '',
	initialCode: '',
	testFile: '',
	language: '',
	fnInput: '',
	fnResult: ''
};
