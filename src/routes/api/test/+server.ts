import { error } from '@sveltejs/kit';
import { NodeVM } from 'vm2';
import chai from 'chai';
import mocha from 'mocha';

import type { RequestHandler } from './$types';
export const GET = (({ request }) => {
	return new Response(JSON.stringify({ mensaje: 'Hola desde la API', request }));
}) satisfies RequestHandler;

export const POST = (async ({ request }) => {
	const { userAnswer } = await request.json();

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

	const fn = sandbox.run(userAnswer, 'vm.js');
	const output = fn([1, 2, 3, 4, 5]);

	const testFn = testSandbox.run(testCode, 'vm.js');
	let testOutput;
	try {
		testOutput = testFn(output);
	} catch (error) {
		testOutput = error;
	}

	return new Response(JSON.stringify(testOutput));
}) satisfies RequestHandler;

const testCode = `
const chai = require('chai')
module.exports = function tests (output) {
	const expect = chai.expect
	try {
		expect(output).to.be.an('array')
	} catch (err) {
		return 'Se espera que el output sea un array.'
	}

	return 'Has pasado los tests, felicidades.'
}
`;
