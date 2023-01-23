import type * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

type Theme = monaco.editor.IStandaloneThemeData;

export const EDITOR_THEME: Theme = {
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
};

export const EDITOR_WORKERS = {
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
