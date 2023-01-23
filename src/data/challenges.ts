import type { ChallengeI } from '@/types';

export const newChallengeDefaults = {
	testFile: `const chai = require('chai')

module.exports = function tests(respuestaDelUsuario) {
	try {
		chai.expect(respuestaDelUsuario).to.be.an('array')
		chai.expect(respuestaDelUsuario).to.have.lengthOf(3)
		chai.expect(respuestaDelUsuario[0]).to.be.a('string')
		chai.expect(respuestaDelUsuario[1]).to.be.a('number')
		chai.expect(respuestaDelUsuario[2]).to.be.a('boolean')
	} catch(e) {
		throw 'Respueta incorrecta'
	}
	return 'Pasaste todos los tests! 🎉'
}`,
	initialFunction: `module.exports = function miReto(miArgumento) {
	return []
}`
};
