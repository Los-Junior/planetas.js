# Crea tests para tu reto

Los tests que se usan en nuestra aplicación se llevan a cabo con [Chai](https://www.chaijs.com/).

Esto es un ejemplo de un test para tu reto:

```js
const { expect } = require('chai');
module.exports = function test(answer, userAnswer) {
    try {
        expect(answer).to.eql(userAnswer);
    } catch() {
        throw 'La respuesta es incorrecta'
    }

    return 'Has pasado los tests! Felicidades 👏'
};
```
