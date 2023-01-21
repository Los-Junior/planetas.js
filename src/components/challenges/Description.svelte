<script lang="ts">
	import { unified } from 'unified';
	import remarkParse from 'remark-parse';
	import remarkHtml from 'remark-html';
	import 'highlight.js/styles/github-dark-dimmed.css';
	import { rehype } from 'rehype';
	import rehypePrism from 'rehype-highlight';
	// @ts-ignore
	import addClasses from 'rehype-add-classes';
	import javascript from 'highlight.js/lib/languages/javascript';

	export let markdown = '';

	const handleHtml = async () => {
		let toHtml = await unified().use(remarkParse).use(remarkHtml).process(markdown);

		const withClasses = await rehype()
			.use(addClasses, { code: 'language-js rounded' })
			.process(toHtml);

		let html = rehype().use(rehypePrism, { languages: { javascript } }).processSync(withClasses);

		return html;
	};

	let html = handleHtml();
</script>

<div class="relative max-h-[80vh] overflow-scroll w-[40%] text-white">
	{#await html then html}
		<div class="prose prose-invert prose-xl px-8">
			{@html html}
		</div>
	{/await}
</div>
