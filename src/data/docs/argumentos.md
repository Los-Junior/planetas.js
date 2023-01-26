## Array de argumentos

Los argumentos que se van a pasar a la [función inicial](/docs/funcion-inicial) se definen en forma de Array. Es decir, el primer elemento del array, va a ser el primer argumento de la función incial. El segundo elemento del array, va a ser el segundo argumento de la función inicial y así consecutivamente, dependiendo de cuántos argumentos requiera tu función. Como en el siguiente ejemplo:

### Ejemplo 1

```json
["argumento1", "argumento2"]
```

Dichos argumentos, van a ser ingresados en la función inicial de la siguiente manera:

```javascript
module.exports = function (argumento1, argumento2) {
	// en este caso ambos argumentos son strings
	// ...
};
```

En este caso, la función inicial recibe dos argumentos: `"argumento1"` y `"argumento2"`. Y ambos son strings, pero puedes definir cualquier tipo de dato que necesites. Como en el siguiente ejemplo:

### Ejemplo 2

```json
[[1, 2, 3, 4]]
```

En este caso, la función inicial recibe un Array con 4 elementos. Y todos son números, quiere decir que:

```js
module.exports = function (argumento1) {
	// en este caso el argumento es un Array
	// y todos sus elementos son números
	// ...
};
```

## CUIDADO

1. Cuando definas tus argumentos, debes hacerlo en formato [JSON](https://es.wikipedia.org/wiki/JSON). Por lo tanto, no puedes usar comillas simples (') para definir strings. Sólo puedes usar comillas dobles (").
