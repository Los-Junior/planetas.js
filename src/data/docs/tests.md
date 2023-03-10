## Tests

Los tests que se usan en nuestra aplicaci贸n se llevan a cabo con [Chai](https://www.chaijs.com/api/bdd/). Si nunca has trabajado con tests, te recomendamos que le eches un vistazo a la documentaci贸n de [Chai](https://www.chaijs.com/api/bdd/).

Esto es un ejemplo de un test para tu reto:

```js
const { expect } = require('chai');
module.exports = function test(userAnswer) {
    try {
        expect(userAnswer).to.eql('la respuesta a mi reto');
    } catch() {
        throw 'La respuesta es incorrecta'
    }

    return 'Has pasado los tests! Felicidades 馃憦'
};
```

Debes importar la funci贸n `expect` de [Chai](https://www.chaijs.com/api/bdd/) y exportar una funci贸n que reciba como argumento la respuesta del usuario. Dentro de esta funci贸n, debes hacer las pruebas que consideres necesarias para validar la respuesta del usuario. Si la respuesta es correcta, debes retornar un mensaje de felicitaci贸n. Si la respuesta es incorrecta, debes lanzar un error con el mensaje de error que consideres necesario.

**OJO**: Siempre debes exportar la funci贸n con el statement `module.exports`.

De esta manera, puedes realizar pruebas sobre el valor final de la [funci贸n inicial](/docs/funcion-inicial).

### Ejemplos

#### Ejemplo 1

```js
const chai = require('chai');

module.exports = function tests(respuestaDelUsuario) {
	try {
		chai.expect(respuestaDelUsuario).to.be.an('array');
		chai.expect(respuestaDelUsuario).to.have.lengthOf(3);
		chai.expect(respuestaDelUsuario[0]).to.be.a('string');
		chai.expect(respuestaDelUsuario[1]).to.be.a('number');
		chai.expect(respuestaDelUsuario[2]).to.be.a('boolean');
	} catch (e) {
		throw 'Respueta incorrecta';
	}
	return 'Pasaste todos los tests! 馃帀';
};
```

Como ves, puedes encerrar todos los `expect` de [Chai](https://www.chaijs.com/api/bdd/) en un mismo clause de `try-catch` y lanzar un error con un mensaje gen茅rico.

#### Ejemplo 2

```js
const chai = require('chai');

module.exports = function tests(respuestaDelUsuario) {
	// La respuesta debe ser un Array
	try {
		chai.expect(respuestaDelUsuario).to.be.an('array');
	} catch (e) {
		throw 'La respuesta debe ser un Array';
	}

	// La respuesta debe tener 3 elementos
	try {
		chai.expect(respuestaDelUsuario).to.have.lengthOf(3);
	} catch (e) {
		throw 'La cantidad de elementos del Array debe ser 3';
	}

	// Puedes probar incluso el valor final de la funci贸n inicial
	try {
		chai.expect(respuestaDelUsuario).to.eql(['hola', 1, true]);
	} catch (e) {
		throw `Respueta incorrecta. Deber铆a ser: \`['hola', 1, true]\` y estamos recibiendo ${JSON.stringify(
			respuestaDelUsuario
		)}`;
	}

	return 'Pasaste todos los tests! 馃帀';
};
```

De esta manera, puedes lanzar un mensaje de error m谩s espec铆fico.
