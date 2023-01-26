## Función inicial

La función inicial es la función en la cuál el usuario va a resolver el problema. Vas a estar a cargo de definir la función inicial, y de definir los argumentos que va a recibir.

**IMPORTANTE:** La función inicial siempre debe ser exportada con el statement `module.exports`, de la siguiente manera:

```js
module.exports = function miReto(...misArgumentos) {
	return [];
};
```

Como ves, la función inicial recibe un [Array de argumentos](/docs/argumentos) el cuál vamos a hacer `spread`, significa que los argumentos van a ser ingresados en la función en el mismo orden que los definas en el [array de argumentos](/docs/argumentos).

### NOTAS

Es importante que si en el [array de argumentos](/docs/argumentos) definiste un argumento, en la función inicial debes definirlo también. Por ejemplo, si en el [array de argumentos](/docs/argumentos) definiste un argumento llamado `miArgumento`, en la función inicial debes definirlo también, de la siguiente manera:

```js
module.exports = function miReto(miArgumento) {
	return [];
};
```

Si en el [array de argumentos](/docs/argumentos) definiste dos argumentos, en la función inicial debes definirlos también, de la siguiente manera:

```js
module.exports = function miReto(miArgumento1, miArgumento2) {
	return [];
};
```
