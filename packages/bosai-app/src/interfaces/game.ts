import { IGameUserData } from "./gameUserData";

export interface IGame {
	title: string;
	slug: string;
	platforms: string[];
	release_dates: string[];
	cover: string;
	collection: {
		name: string;
		slug: string;
	};
	consoles: string[];
	developers: string[];
	distributor: string;
	involved_companies: {
		company: {
			name: string;
			logo: {
				url: string;
			};
		};
	}[];
	franchises: {
		name: string;
	}[];
	userData: IGameUserData;
}
