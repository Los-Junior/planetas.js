<script lang="ts">
	import { DefaultChallenge, type ChallengeI } from '@/types';
	export let challenge: ChallengeI = DefaultChallenge;
	import * as monaco from 'monaco-editor';
	import { onMount } from 'svelte';
	import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
	import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
	import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
	import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
	import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
	import type { Session } from '@/types/authjs';

	export let user = true;
	export let challengeId = '';
	export let session: Session | undefined = undefined;

	let el: HTMLDivElement;
	let userAnswer = challenge.initialCode;

	const { fnInput, fnResult, testFile } = challenge;

	const submitCode = async () => {
		const res = await fetch(`/api/test`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({
				userAnswer,
				fnInput,
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
		localStorage.setItem(`@reto${challenge.id}`, e.target.value);
	};

	onMount(() => {
		self.MonacoEnvironment = {
			getWorker: function (_moduleId: any, label: string) {
				if (label === 'json') {
					return new jsonWorker();
				}
				if (label === 'css' || label === 'scss' || label === 'less') {
					return new cssWorker();
				}
				if (label === 'html' || label === 'handlebars' || label === 'razor') {
					return new htmlWorker();
				}
				if (label === 'typescript' || label === 'javascript') {
					return new tsWorker();
				}
				return new editorWorker();
			}
		};
		monaco.editor.defineTheme('juniorTheme', {
			base: 'vs',
			inherit: true,
			rules: [
				{ background: '#EDF9FA', token: '' },
				{ token: 'delimiter', foreground: '#0496ff' },
				{ token: 'delimiter.bracket', foreground: '#d81159' }
			],
			colors: {
				'editor.foreground': '#ffffff',
				'editor.background': '#170312',
				'editorCursor.foreground': '#97D8B2',
				'editor.lineHighlightBackground': '#0000FF20',
				'editorLineNumber.foreground': '#008800',
				'editor.selectionBackground': '#531253',
				'editor.inactiveSelectionBackground': '#88000015',
				'editorIndentGuide.background': '#33032F'
			}
		});
		monaco.editor.setTheme('juniorTheme');

		const prepopulatedAnswer = localStorage.getItem(`@reto${challenge.id}`);

		if (prepopulatedAnswer) userAnswer = prepopulatedAnswer;

		const editorInstance = monaco.editor.create(el, {
			value: prepopulatedAnswer ? prepopulatedAnswer : challenge.initialCode,
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
