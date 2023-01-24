export interface ChallengeI {
	_id?: string;
	name: string;
	difficulty: string;
	image?: string;
	description: string;
	initialFunction: string;
	functionArguments: any[];
	language: string;
	testFile: string;
	fnResult: string;
	isHomePage?: boolean;
	order?: number;
}

export const DefaultChallenge: ChallengeI = {
	name: '',
	image: '',
	difficulty: '',
	description: '',
	functionArguments: [],
	initialFunction: '',
	testFile: '',
	language: '',
	fnResult: '',
	isHomePage: false
};

export const ChallengeDifficulties = {
	EASY: 'Fácil',
	MEDIUM: 'Medio',
	HARD: 'Difícil'
};

export enum ArrayTypes {
	string = 'strings',
	number = 'números',
	boolean = 'booleanos',
	object = 'objetos',
	array = 'arreglos'
}
