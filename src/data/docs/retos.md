## Retos

Los retos de programación son una forma de aprender a programar. En ellos se plantea un problema y se pide al programador que lo resuelva. En este caso, se trata de resolver un problema de programación en el que se pide que se escriba un programa que resuelva un problema matemático.

Este documento es pensado principalmente para las personas que quiera crear retos en la plataforma. En escencia, un reto es simplemente una descripción de un problema que debe ser solucionado. Para ello, se debe escribir un programa que resuelva el problema. Para ello te damos un sandbox el cuál puedes ejecutar Javacript de manera segura desde tu navegador.

Entonces, si debseas crear un reto de programción y desafiar a tus amigos, este es el lugar indicado.

### Estructura de los retos

Los retos tienen la siguiente estructura, que puedes ver en el [Github](https://github.com/Los-Junior/advent-of-juniors/blob/ffd27fb0b735f45006222d9c03dc91d5aa7bb348/src/types/challenge.ts#L1&L14) y es la siguiente:

```ts
interface ChallengeI {
	_id: string;
	name: string;
	difficulty: string;
	description: string;
	initialFunction: string;
	functionArguments: any[];
	testFile: string;
	fnResult: string;
}
```

### Cómo crear un reto.

Puedes crear un reto [desde aquí](/retos/nuevo). Las propiedades que se piden son las siguientes:

- **Nombre**: El nombre del reto.
- **Descripción**: La descripción del reto. Puede ser en formato Markdown. Aquí debes escribir todos los detalles que necesita el usuario para resolver el reto de manera satisfactoria.
- **Dificultad**: La dificultad del reto. Puede ser `Fácil`, `Medio` o `Difícil`.
- **Función inicial**: La [función inicial](/docs/funcion-inicial) que se le da al usuario. Esta función debe siempre ser exportada con el statement `module.exports`.
- **Argumentos de la función**: Los [argumentos](/docs/argumentos) que recibe la función inicial. Estos argumentos deben ser un arreglo de objetos.
- **Tests**: Los [tests](/docs/tests) a los cuáles será puesta a prueba la solución del usuario. Los tests también son una función que debe ser exportada con el statement `module.exports`.
