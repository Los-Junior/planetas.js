import { NodeVM } from 'vm2';
import { challengesObject } from '../../../data/challenges';
import type { RequestHandler } from './$types';

export const POST = (async ({ request, params }) => {
	const { userAnswer, challengeId } = await request.json();
	const challenge = challengesObject[challengeId];
	const fnInput = JSON.parse(challenge.fnInput);
	const expectedResult = JSON.parse(challenge.fnResult);

	const vm = new NodeVM({ console: 'inherit', sandbox: {} });
	const fn = vm.run(userAnswer, 'vm.js');
	const output = await fn(fnInput);

	const testVM = new NodeVM({
		require: {
			external: {
				modules: ['mocha', 'chai'],
				transitive: false
			}
		},
		console: 'inherit'
	});
	const testFn = testVM.run(challenge.testFile, 'vm.js');
	try {
		const testOutput = testFn(expectedResult, output);
		// TODO: Agregar reto a lista de retos completados del usuario.
		return new Response(JSON.stringify({ message: testOutput }), { status: 200 });
	} catch (error: any) {
		console.log(error);
		return new Response(JSON.stringify({ message: error }), { status: 400 });
	}
}) satisfies RequestHandler;
