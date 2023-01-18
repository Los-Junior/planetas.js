import type { Challenge } from '@/types';

export const challengesObject: { [key: string]: Challenge } = {
	1: {
		id: 1,
		image: '/challenges/planet-01.png',
		difficulty: 'Fácil',
		name: 'Reto #1: ¡Automatizando envolver regalos de navidad!',
		description:
			"Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea. A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos. El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. Por ejemplo: \n ```js \n const gifts = ['cat', 'game', 'socks']  \n ``` \n Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo. Nota: El carácter \n representa un salto de línea. ¡Ojo! Asegúrate que pones el número correcto de * para envolver completamente el string. Pero no demasiados. Sólo los necesarios para cubrir el string. Ah, y no modifiques (mutes) el array original.",
		solution: 1,
		initialCode: `module.exports = function wrapping(gifts) {
	return []
}`,
		language: 'javascript',
		fnInput: `["cat", "game", "socks"]`,
		fnResult: `["**** *cat* ****", "**** *game* ****", "**** *socks* ****"]`,
		testFile: `
const chai = require('chai')
module.exports = function tests (result, output) {
	const expect = chai.expect

try {
	expect(output).to.be.an('array')
} catch (err) {
	throw 'Se espera que el output sea un array.'
}

try {
	expect(output).to.eql(result)
} catch (err) {
	throw 'Respuesta inválida'
}


return 'Has pasado los tests, felicidades.'
}
`
	},
	2: {
		id: 2,
		image: '/challenges/planet-02.png',
		difficulty: 'Medio',
		name: 'Reto #2: ¡Navegando por la Vía Láctea: un desafío de mapas estelares!',
		description: '',
		solution: 1,
		initialCode: ``,
		language: 'javascript',
		fnInput: ``,
		fnResult: '',
		testFile: ``
	},
	3: {
		id: 3,
		image: '/challenges/planet-03.png',
		difficulty: 'Difícil',
		name: 'Reto #3: Detección de objetos en órbita: uso de IA para rastrear satélites',
		description: '',
		solution: 1,
		initialCode: ``,
		language: 'javascript',
		fnInput: ``,
		fnResult: '',
		testFile: ``
	},
	4: {
		id: 4,
		image: '/challenges/planet-04.png',
		difficulty: 'Medio',
		name: 'Reto #4: Construyendo un módulo de aterrizaje lunar: un problema de programación basado en la física',
		description: '',
		solution: 1,
		initialCode: ``,
		language: 'javascript',
		fnInput: ``,
		fnResult: '',

		testFile: ``
	},
	5: {
		id: 5,
		image: '/challenges/planet-05.png',
		difficulty: 'Fácil',
		name: 'Reto #5: Comunicaciones interestelares: codificación y decodificación de mensajes',
		description: '',
		solution: 1,
		initialCode: ``,
		language: 'javascript',
		fnInput: ``,
		fnResult: '',

		testFile: ``
	},
	6: {
		id: 6,
		image: '/challenges/planet-06.png',
		difficulty: 'Difícil',
		name: 'Reto #6: Minería de asteroides: optimización de la extracción de recursos',
		description: '',
		solution: 1,
		initialCode: ``,
		language: 'javascript',
		fnInput: ``,
		fnResult: '',

		testFile: ``
	},
	7: {
		id: 7,
		image: '/challenges/planet-07.png',
		difficulty: 'Difícil',
		name: 'Reto #7: La búsqueda de inteligencia extraterrestre: un desafío de análisis de datos',
		description: '',
		solution: 1,
		initialCode: ``,
		language: 'javascript',
		fnInput: ``,
		fnResult: '',

		testFile: ``
	},
	8: {
		id: 8,
		image: '/challenges/planet-08.png',
		difficulty: 'Fácil',
		name: 'Reto #8: Limpieza de desechos espaciales: simulación de una misión robótica',
		description: '',
		solution: 1,
		initialCode: ``,
		language: 'javascript',
		fnInput: ``,
		fnResult: '',

		testFile: ``
	},
	9: {
		id: 9,
		image: '/challenges/planet-09.png',
		difficulty: 'Difícil',
		name: 'Reto #9: Diseño de un Mars Rover: un problema de programación de ingeniería',
		description: '',
		solution: 1,
		initialCode: ``,
		language: 'javascript',
		fnInput: ``,
		fnResult: '',

		testFile: ``
	},
	10: {
		id: 10,
		image: '/challenges/planet-10.png',
		difficulty: 'Medio',
		name: 'Reto #10: Predicción de erupciones solares: un desafío de aprendizaje automático',
		description: '',
		solution: 1,
		initialCode: ``,
		language: 'javascript',
		fnInput: ``,
		fnResult: '',

		testFile: ``
	},
	11: {
		id: 11,
		image: '/challenges/planet-11.png',
		difficulty: 'Fácil',
		name: 'Reto #11: Probe Autonomy: programación de una misión de exploración del espacio profundo',
		description: '',
		solution: 1,
		initialCode: ``,
		language: 'javascript',
		fnInput: ``,
		fnResult: '',

		testFile: ``
	},
	12: {
		id: 12,
		image: '/challenges/planet-12.png',
		difficulty: 'Medio',
		name: 'Reto #12: La carrera hacia el planeta rojo: un juego de estrategia en tiempo real',
		description: '',
		solution: 1,
		initialCode: ``,
		language: 'javascript',
		fnInput: ``,
		fnResult: '',

		testFile: ``
	},
	13: {
		id: 13,
		image: '/challenges/planet-13.png',
		difficulty: 'Difícil',
		name: 'Reto #13: Mapeando el Universo: Un Problema de Programación de Gráficos 3D',
		description: '',
		solution: 1,
		initialCode: ``,
		language: 'javascript',
		fnInput: ``,
		fnResult: '',

		testFile: ``
	},
	14: {
		id: 14,
		image: '/challenges/planet-14.png',
		difficulty: 'Fácil',
		name: 'Reto #14: Descubrimiento de exoplanetas: un desafío de ciencia de datos',
		description: '',
		solution: 1,
		initialCode: ``,
		language: 'javascript',
		fnInput: ``,
		fnResult: '',

		testFile: ``
	},
	15: {
		id: 15,
		image: '/challenges/planet-15.png',
		difficulty: 'Difícil',
		name: 'Reto #15: Mantenimiento de la estación espacial: un problema de programación de robótica',
		description: '',
		solution: 1,
		initialCode: ``,
		language: 'javascript',
		fnInput: ``,
		fnResult: '',

		testFile: ``
	}
};
