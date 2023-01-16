import { NodeVM } from 'vm2';
import chai from 'chai';
import mocha from 'mocha';
import { challengesObject } from '../../../data/challenges';
import type { RequestHandler } from './$types';

export const POST = (async ({ request, params }) => {
	const { userAnswer, challengeId } = await request.json();
	const challenge = challengesObject[challengeId];

	const sandbox = new NodeVM();
	const testSandbox = new NodeVM({
		sandbox: { mocha, chai },
		require: {
			external: {
				transitive: true,
				modules: ['mocha', 'chai']
			},
			builtin: ['assert']
		}
	});

	console.log(JSON.parse(challenge.fnInput));

	const fn = sandbox.run(userAnswer, 'vm.js');
	const output = fn(JSON.parse(challenge.fnInput));

	const testFn = testSandbox.run(challenge.testFile, 'vm.js');
	let testOutput;
	try {
		testOutput = testFn(output);
	} catch (error) {
		testOutput = error;
	}

	return new Response(JSON.stringify(testOutput));
}) satisfies RequestHandler;
