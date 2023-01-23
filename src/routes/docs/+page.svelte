<script>
	import { page } from '$app/stores';
	import { makeHtml } from '@/lib/makeHtml';
	import 'highlight.js/styles/github-dark-dimmed.css';
	const md = $page.data.md;
	const html = makeHtml(md);
</script>

<div class="flex items-center justify-center">
	{#await html then html}
		<div class="prose prose-invert prose-xl px-8 w-full text-white">
			{@html html}
		</div>
	{/await}
</div>
