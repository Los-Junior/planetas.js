<script lang="ts">
	import Argument from '@/components/challenges/new/Argument.svelte';
	import GenericEditor from '@/components/challenges/new/GenericEditor.svelte';
	import InputContainer from '@/components/challenges/new/InputContainer.svelte';
	import NewArrayArg from '@/components/challenges/new/NewArrayArg.svelte';
	import NewNumberArg from '@/components/challenges/new/NewNumberArg.svelte';
	import NewObjectArg from '@/components/challenges/new/NewObjectArg.svelte';
	import NewStringArg from '@/components/challenges/new/NewStringArg.svelte';
	import { newChallengeDefaults } from '@/data/challenges';

	import { argumentsStore } from '@/stores/newChallenge';
	import { ChallengeDifficulties, type ChallengeI } from '@/types';

	const handleDesc = (e: CustomEvent) => {
		challenge.description = e.detail;
	};

	const handleInitialFunction = (e: CustomEvent) => {
		challenge.initialFunction = e.detail;
	};

	const handleTestFile = (e: CustomEvent) => {
		console.log(e.detail);
		challenge.testFile = e.detail;
	};

	let challenge: ChallengeI = {
		name: '',
		description: '',
		initialFunction: newChallengeDefaults.initialFunction,
		functionArguments: [],
		testFile: newChallengeDefaults.testFile,
		difficulty: ChallengeDifficulties.EASY,
		fnResult: '',
		language: 'javascript',
		isHomePage: false
	};

	argumentsStore.subscribe((args) => (challenge.functionArguments = args));

	$: console.log(challenge);
</script>

<div class="text-white ">
	<h1 class="text-4xl">Crear nuevo reto</h1>
	<p>Crea tus propios retos y compártelos con tus amigos a ver si son capaces de resolverlos.</p>
	<div class="separator divide-y divide-brand-dark-purple">
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
				<p class="font-light text-xs">Cuántos y cuáles argumentos tiene tu función inicial.</p>
				<p class="font-light text-xs">
					Agrega tantos argumentos como quieras, pero recuerda que el usuario debe resolver tu reto
					con la función inicial que has definido.
				</p>
				<p class="font-light text-xs">
					Los argumentos serán ingresados en tu función inicial en el mismo orden que los definas
					aquí.
				</p>
			</div>
			<div class="space-y-2 divide-y flex-1 divide-brand-dark-purple">
				<div class="flex">
					<NewStringArg />
					<NewArrayArg />
					<NewObjectArg />
					<NewNumberArg />
				</div>
				<div class="py-1">
					{#each challenge.functionArguments as arg, i}
						<Argument
							{arg}
							on:delete={() => {
								challenge.functionArguments.splice(i, 1);
							}}
						/>
					{/each}
				</div>
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
