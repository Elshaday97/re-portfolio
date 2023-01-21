import type { Asset } from 'contentful';

export interface ICard {
	fields?: {
		title: string;
		subTitle: string;
		description: string;
		identifier: string;
		link: string;
		image: Asset;
	};
}

export interface ISocials {
	fields?: {
		linkedin: string;
		twitter: string;
		gitLab: string;
		gitHub: string;
		medium: string;
	};
}
export interface IAboutSectionFields {
	fields?: {
		introduction: string;
		hollowTitle: string;
		normalTitle: string;
		mainDescription: string;
		mainImage: Asset;
		secondTitle: string;
		secondSubtitle: string;
		secondDescription: string;
		buttonLink: string;
		buttonLabel: string;
		socialMediaLinks: ISocials;
		secondImage: Asset;
	};
}
export interface ICardSectionFields {
	fields?: {
		title: string;
		description: string;
		cards: ICard[];
	};
}

export interface IFooterFields {
	fields?: {
		title: string;
	};
}
export interface IContent {
	about: IAboutSectionFields;
	projects: ICardSectionFields;
	blogs: ICardSectionFields;
	footer: IFooterFields;
}
