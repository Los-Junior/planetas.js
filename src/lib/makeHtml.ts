import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import { rehype } from 'rehype';
import rehypePrism from 'rehype-highlight';
// @ts-ignore
import addClasses from 'rehype-add-classes';
import javascript from 'highlight.js/lib/languages/javascript';

export const makeHtml = async (markdown: string) => {
	let toHtml = await unified().use(remarkParse).use(remarkHtml).process(markdown);

	const withClasses = await rehype()
		.use(addClasses, { code: 'language-js rounded' })
		.process(toHtml);

	let html = rehype().use(rehypePrism, { languages: { javascript } }).processSync(withClasses);

	return html;
};
