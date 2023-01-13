<script lang="ts">
	import Navbar from '../../../components/challenges/Navbar.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	import * as monaco from 'monaco-editor';

	import { onMount } from 'svelte';
	import { challengesObject } from '../../..//data/challenges';
	import Description from '../../../components/challenges/Description.svelte';

	const challenge = challengesObject[data.id];

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

<Navbar />
<div class="bg-brand-dark flex pt-6">
	<div class="flex-1 h-[80vh]" bind:this={el} />

	<div class="relative h-screen overflow-scroll w-[40%] text-white">
		<Description markdown={challenge.description} />
	</div>
</div>
