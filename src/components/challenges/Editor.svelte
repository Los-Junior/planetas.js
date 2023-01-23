<script lang="ts">
	import { DefaultChallenge, type ChallengeI } from '@/types';
	export let challenge: ChallengeI = DefaultChallenge;
	import * as monaco from 'monaco-editor';
	import { onMount } from 'svelte';
	import type { Session } from '@/types/authjs';
	import { EDITOR_THEME, EDITOR_WORKERS } from '@/data/monaco';

	export let user = true;
	export let challengeId = '';
	export let session: Session | undefined = undefined;

	let el: HTMLDivElement;
	let userAnswer = challenge.initialFunction;

	const { functionArguments, fnResult, testFile } = challenge;

	const submitCode = async () => {
		const res = await fetch(`/api/test`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({
				userAnswer,
				functionArguments,
				fnResult,
				testFile,
				userId: session?.user.id,
				challengeId
			})
		});
		const { message } = await res.json();
		if (!res.ok) {
			alert(message);
			return;
		}

		alert(message);
	};

	const handleEditorChange = (e: any) => {
		userAnswer = e.target.value;
		localStorage.setItem(`@reto${challenge._id}`, e.target.value);
	};

	onMount(() => {
		self.MonacoEnvironment = EDITOR_WORKERS;
		monaco.editor.defineTheme('juniorTheme', EDITOR_THEME);
		monaco.editor.setTheme('juniorTheme');

		const prepopulatedAnswer = localStorage.getItem(`@reto${challenge._id}`);

		if (prepopulatedAnswer) userAnswer = prepopulatedAnswer;

		const editorInstance = monaco.editor.create(el, {
			value: prepopulatedAnswer ? prepopulatedAnswer : challenge.initialFunction,
			language: challenge.language
		});

		editorInstance.updateOptions({
			fontSize: 20,
			minimap: { enabled: false },
			bracketPairColorization: {
				enabled: true
			}
		});

		return () => {
			editorInstance.dispose();
		};
	});
</script>

<div class="flex-1 flex flex-col items-center">
	<div class="h-[70vh] w-full" bind:this={el} on:change={handleEditorChange} />
	{#if user}
		<button class="w-[90%] py-2 rounded bg-brand-light-purple text-white" on:click={submitCode}
			>Enviar respuesta</button
		>
	{:else}
		<button class="w-[90%] py-2 rounded bg-brand-light-purple text-white"
			>Haz login con Github</button
		>
	{/if}
</div>
