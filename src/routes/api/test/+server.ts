import { NodeVM } from 'vm2';
import { challengesObject } from '@/data/challenges';
import type { RequestHandler } from './$types';
import dbConnect from '@/config/dbConnect';
import { CompletedChallenge } from '@/models/challenges';

export const POST = (async ({ request, params, locals }) => {
	const { userAnswer, challengeId, fnInput, fnResult, testFile, userId } = await request.json();
	const parsedFnInput = JSON.parse(fnInput);
	const parsedExpectedOutput = JSON.parse(fnResult);

	const vm = new NodeVM({ console: 'inherit', sandbox: {} });
	const fn = vm.run(userAnswer, 'vm.js');
	const output = await fn(parsedFnInput);

	const testVM = new NodeVM({
		require: {
			external: {
				modules: ['mocha', 'chai'],
				transitive: false
			}
		},
		console: 'inherit'
	});

	const testFn = testVM.run(testFile, 'vm.js');

	try {
		const testOutput = testFn(parsedExpectedOutput, output);
		// TODO: Agregar reto a lista de retos completados del usuario.
		// TODO: Usar el challengeId
		await dbConnect();
		await CompletedChallenge.create({ user: userId, challenge: challengeId });

		return new Response(JSON.stringify({ message: testOutput }), { status: 200 });
	} catch (error: any) {
		return new Response(JSON.stringify({ message: error }), { status: 400 });
	}
}) satisfies RequestHandler;
