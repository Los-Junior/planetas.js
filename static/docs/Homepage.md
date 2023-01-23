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

Lorem Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
