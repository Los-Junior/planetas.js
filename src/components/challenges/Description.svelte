<script lang="ts">
	import { makeHtml } from '@/lib/makeHtml';
	import 'highlight.js/styles/github-dark-dimmed.css';

	export let markdown = '';
	let html = makeHtml(markdown);
</script>

<div class="relative max-h-[80vh] overflow-scroll w-[40%] text-white">
	{#await html then html}
		<div class="prose prose-invert prose-xl px-8">
			{@html html}
		</div>
	{/await}
</div>
