<script>
	import { page } from '$app/stores';
	import { makeHtml } from '@/lib/makeHtml';
	import 'highlight.js/styles/github-dark-dimmed.css';
	import '@/styles/docs.css';
	const md = $page.data.md;
	const path = $page.data.path;
	const html = makeHtml(md);
	console.log(path);
</script>

<div class="flex items-center justify-center">
	{#await html then html}
		<div class="prose prose-invert prose-xl px-8 w-full text-white">
			{@html html}
		</div>
	{/await}
</div>
