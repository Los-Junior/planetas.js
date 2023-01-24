<script lang="ts">
	import DifficultyRadios from '@/components/challenges/new/DifficultyRadios.svelte';
	import GenericEditor from '@/components/challenges/new/GenericEditor.svelte';
	import InputContainer from '@/components/challenges/new/InputContainer.svelte';
	import { newChallengeDefaults } from '@/data/challenges';

	import { argumentsStore } from '@/stores/newChallenge';
	import { ChallengeDifficulties, type ChallengeI } from '@/types';

	let difficulty = 'Fácil';

	let challenge: ChallengeI = {
		name: '',
		description: '',
		initialFunction: newChallengeDefaults.initialFunction,
		functionArguments: newChallengeDefaults.functionArguments,
		testFile: newChallengeDefaults.testFile,
		difficulty,
		fnResult: '',
		language: 'javascript',
		isHomePage: false
	};

	const handleDesc = (e: CustomEvent) => {
		challenge.description = e.detail;
	};

	const handleInitialFunction = (e: CustomEvent) => {
		challenge.initialFunction = e.detail;
	};

	const handleTestFile = (e: CustomEvent) => {
		challenge.testFile = e.detail;
	};

	const handleArguments = (e: CustomEvent) => {
		challenge.functionArguments = JSON.parse(e.detail);
	};

	argumentsStore.subscribe((args) => (challenge.functionArguments = args));

	$: challenge.difficulty = difficulty;
</script>

<div class="text-white ">
	<h1 class="text-4xl">Crear nuevo reto</h1>
	<p>Crea tus propios retos y compártelos con tus amigos a ver si son capaces de resolverlos.</p>
	<div class="separator divide-y divide-brand-dark-purple">
		<!-- NAME INPUT -->
		<InputContainer>
			<div class="w-1/4">
				<h3 class="text-xl">Nombre</h3>
				<p class="font-light text-xs">Dale un nombre significativo a tu reto.</p>
			</div>
			<input
				type="text"
				class="flex-1 h-12 px-2 bg-brand-dark border border-brand-light-purple rounded"
				bind:value={challenge.name}
			/>
		</InputContainer>

		<!-- DESCRIPTION INPUT -->
		<InputContainer>
			<div class="w-1/4 space-y-2">
				<h3 class="text-xl">Descripción</h3>
				<p class="font-light text-xs">
					Explica de manera detallada y concisa cómo debe ser resuelto tu reto.
				</p>
				<p class="font-light text-xs">Puedes escribir la descripción en Markdown.</p>
			</div>
			<div class="p-1 flex-1 rounded border border-brand-light-purple">
				<GenericEditor className="flex-1 h-96" language="markdown" on:change={handleDesc} />
			</div>
		</InputContainer>

		<!-- DIFFICULTY INPUT -->
		<InputContainer>
			<div class="w-1/4">
				<h3 class="text-xl">Dificultad</h3>
				<p class="font-light text-xs">Selecciona la dificultad de tu reto.</p>
			</div>

			<div class="flex-1 flex space-x-2 items-center">
				<input
					bind:group={difficulty}
					name="difficulty"
					checked={difficulty === ChallengeDifficulties.EASY}
					type="radio"
					class="w-6 h-6 px-2 bg-brand-dark border border-brand-light-purple"
					value={ChallengeDifficulties.EASY}
				/>
				<p>Fácil</p>
			</div>
			<div class="flex-1 flex space-x-2 items-center">
				<input
					bind:group={difficulty}
					name="difficulty"
					type="radio"
					checked={difficulty === ChallengeDifficulties.MEDIUM}
					class="w-6 h-6 px-2 bg-brand-dark border border-brand-light-purple"
					value={ChallengeDifficulties.MEDIUM}
				/>
				<p>Medio</p>
			</div>
			<div class="flex-1 flex space-x-2 items-center">
				<input
					bind:group={difficulty}
					name="difficulty"
					type="radio"
					checked={difficulty === ChallengeDifficulties.HARD}
					class="w-6 h-6 px-2 bg-brand-dark border border-brand-light-purple"
					value={ChallengeDifficulties.HARD}
				/>
				<p>Difícil</p>
			</div>
		</InputContainer>

		<!-- INITIAL FUNCTION INPUT -->
		<InputContainer>
			<div class="w-1/4 space-y-2">
				<h3 class="text-xl">Función inicial</h3>
				<p class="font-light text-xs">
					Este es el código inicial de la función que el usuario debe resolver.
				</p>
				<p class="font-light text-xs">
					Este archivo debe empezar <span class="font-bold">siempre</span> con la declaración
					<span class="font-bold">`module.exports`</span> y exportar una
					<span class="font-bold">función</span>.
				</p>
				<p class="font-light text-xs">
					Cambia el nombre de tu función y los argumentos que recibe a tu gusto.
				</p>
			</div>
			<div class="p-1 flex-1 rounded border border-brand-light-purple">
				<GenericEditor
					className="flex-1 h-80"
					on:change={handleInitialFunction}
					defaultValue={challenge.initialFunction}
				/>
			</div>
		</InputContainer>
		<InputContainer>
			<div class="w-1/4 space-y-2">
				<h3 class="text-xl">Argumentos de la función</h3>
				<p class="font-light text-xs">
					Cuántos y cuáles argumentos tiene tu función inicial. Si es la primera vez que creas un
					array de argumentos, revisa los docs.
				</p>

				<p class="font-light text-xs">
					Debes escribirlos en formato <span class="text-normal underline">JSON</span>.
				</p>
			</div>
			<div class="p-1 flex-1 rounded border border-brand-light-purple">
				<GenericEditor
					className="flex-1 h-40"
					language="json"
					on:change={handleArguments}
					defaultValue={`[ "primerArgumentoTipoString", ["segundo", "argumento", "tipo", "ArrayDeStrings"] ]`}
				/>
			</div>
		</InputContainer>
		<InputContainer>
			<div class="w-1/4 space-y-2">
				<h3 class="text-xl">Tests</h3>
				<p class="font-light text-xs">
					Para crear afirmaciones usamos <a
						class="font-normal underline"
						href="https://www.chaijs.com/api/bdd/"
						rel="noopener noreferrer">Chai</a
					>. Si es la primera vez que creas un test, revisa los docs.
				</p>
				<p class="font-light text-xs">
					En este apartado puedes definir los tests que el usuario debe pasar para resolver tu reto.
				</p>
			</div>
			<div class="p-1 flex-1 rounded border border-brand-light-purple">
				<GenericEditor
					className="flex-1 h-96"
					language="javascript"
					on:change={handleTestFile}
					defaultValue={challenge.testFile}
				/>
			</div>
		</InputContainer>
	</div>
	<button
		class="py-2 px-4 bg-brand-dark-purple rounded"
		on:click={() => alert(JSON.stringify(challenge, null, 2))}>Guardar</button
	>
</div>
