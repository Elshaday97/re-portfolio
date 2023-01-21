/* eslint-disable @typescript-eslint/no-explicit-any */
import contentful, { type ContentfulClientApi, type EntryCollection } from 'contentful';
import { PRIVATE_SPACE_ID, PRIVATE_ACCESS_TOKEN, PRIVATE_ENTRY_KEY } from '$env/static/private';
import type { IContent } from './types';

const contentfulClient: ContentfulClientApi = contentful.createClient({
	space: PRIVATE_SPACE_ID,
	environment: 'master', // defaults to 'master' if not set
	accessToken: PRIVATE_ACCESS_TOKEN
});

const getContents = async () => {
	try {
		const response: EntryCollection<any> = await contentfulClient.getEntries(PRIVATE_ENTRY_KEY);
		if (response && response.items && response.items.length > 1) {
			const content: IContent | undefined = response.items[0]?.fields;
			return content;
		}
	} catch (error) {
		console.log(error);
	}
};

export default getContents;
