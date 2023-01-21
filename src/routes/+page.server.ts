import getContents from '$lib/server/contentful';
import type { IContent } from '$lib/server/types';

export async function load() {
	const content: IContent | undefined = await getContents();

	if (!content) {
		return {
			status: 404
		};
	}

	return {
		content
	};
}
