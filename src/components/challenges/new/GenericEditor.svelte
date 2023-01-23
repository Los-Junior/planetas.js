<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatchEvent = createEventDispatcher();
	import { EDITOR_THEME, EDITOR_WORKERS } from '@/data/monaco';
	import clsx from 'clsx';
	import * as monaco from 'monaco-editor';
	import { onMount } from 'svelte';
	export let className = '';
	export let defaultValue = '';
	export let language = 'javascript';

	let el: HTMLDivElement;

	onMount(() => {
		self.MonacoEnvironment = EDITOR_WORKERS;
		monaco.editor.defineTheme('juniorTheme', EDITOR_THEME);
		monaco.editor.setTheme('juniorTheme');

		const editorInstance = monaco.editor.create(el, {
			value: defaultValue,
			language
		});
		editorInstance.updateOptions({ minimap: { enabled: false } });
		editorInstance.onDidChangeModelContent((e) => {
			dispatchEvent('change', editorInstance.getValue());
		});
		return () => {
			editorInstance.dispose();
		};
	});
</script>

<div bind:this={el} class={clsx('', className)} />
