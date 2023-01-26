## Tests

Los tests que se usan en nuestra aplicación se llevan a cabo con [Chai](https://www.chaijs.com/api/bdd/). Si nunca has trabajado con tests, te recomendamos que le eches un vistazo a la documentación de [Chai](https://www.chaijs.com/api/bdd/).

Esto es un ejemplo de un test para tu reto:

```js
const { expect } = require('chai');
module.exports = function test(userAnswer) {
    try {
        expect(userAnswer).to.eql('la respuesta a mi reto');
    } catch() {
        throw 'La respuesta es incorrecta'
    }

    return 'Has pasado los tests! Felicidades 👏'
};
```

Debes importar la función `expect` de [Chai](https://www.chaijs.com/api/bdd/) y exportar una función que reciba como argumento la respuesta del usuario. Dentro de esta función, debes hacer las pruebas que consideres necesarias para validar la respuesta del usuario. Si la respuesta es correcta, debes retornar un mensaje de felicitación. Si la respuesta es incorrecta, debes lanzar un error con el mensaje de error que consideres necesario.

**OJO**: Siempre debes exportar la función con el statement `module.exports`.

De esta manera, puedes realizar pruebas sobre el valor final de la [función inicial](/docs/funcion-inicial).

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
	return 'Pasaste todos los tests! 🎉';
};
```

Como ves, puedes encerrar todos los `expect` de [Chai](https://www.chaijs.com/api/bdd/) en un mismo clause de `try-catch` y lanzar un error con un mensaje genérico.

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

	// Puedes probar incluso el valor final de la función inicial
	try {
		chai.expect(respuestaDelUsuario).to.eql(['hola', 1, true]);
	} catch (e) {
		throw `Respueta incorrecta. Debería ser: \`['hola', 1, true]\` y estamos recibiendo ${JSON.stringify(
			respuestaDelUsuario
		)}`;
	}

	return 'Pasaste todos los tests! 🎉';
};
```

De esta manera, puedes lanzar un mensaje de error más específico.
