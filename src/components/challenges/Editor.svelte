<script lang="ts">
	import { DefaultChallenge, type Challenge } from '../..//types';
	export let challenge: Challenge = DefaultChallenge;
	import * as monaco from 'monaco-editor';
	import { onMount } from 'svelte';
	export let user = false;
	let el: HTMLDivElement;

	onMount(() => {
		monaco.editor.defineTheme('juniorTheme', {
			base: 'vs',
			inherit: true,
			rules: [{ background: '#EDF9FA', token: '' }],
			colors: {
				'editor.foreground': '#ffffff',
				'editor.background': '#170312',
				'editorCursor.foreground': '#97D8B2',
				'editor.lineHighlightBackground': '#0000FF20',
				'editorLineNumber.foreground': '#008800',
				'editor.selectionBackground': '#531253',
				'editor.inactiveSelectionBackground': '#88000015',
				'editorIndentGuide.background': '#33032F',
				'editorBracketMatch.border': '#ffffff'
			}
		});
		monaco.editor.setTheme('juniorTheme');

		const editorInstance = monaco.editor.create(el, {
			value: challenge.initialCode,
			language: challenge.language
		});

		editorInstance.updateOptions({
			fontSize: 20,
			minimap: { enabled: false }
		});
	});
</script>

<div class="flex-1 flex flex-col items-center">
	<div class="h-[70vh] w-full" bind:this={el} />
	{#if user}
		<button>Enviar Reto</button>
	{:else}
		<button class="w-[90%] py-2 rounded bg-brand-light-purple text-white"
			>Haz login con Github</button
		>
	{/if}
</div>
