<script>
	import { page } from '$app/stores';
	import { makeHtml } from '@/lib/makeHtml';
	import 'highlight.js/styles/tokyo-night-dark.css';
	import '@/styles/docs.css';
	$: md = $page.data.md;
	$: html = makeHtml(md);
</script>

<div class="flex items-center justify-center">
	{#await html then html}
		<div class="prose prose-xl prose-invert px-8 w-full text-white">
			{@html html}
		</div>
	{/await}
</div>
