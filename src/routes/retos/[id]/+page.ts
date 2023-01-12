import { error } from '@sveltejs/kit';

interface Props {
	params: {
		id: string;
	};
}

/** @type {import('./$types').PageLoad} */
export function load({ params }: Props) {
	if (!params.id) {
		throw error(404, 'Not found');
	}
	return { id: params.id };
}
