import React from "react";

import { IGame } from "../interfaces/game";

export interface CollectionContextProps {
	collection: IGame[];
	addGame?: (game: IGame) => void;
	updateGame?: (slug: string, game: IGame) => void;
	removeGame?: (slug: string) => void;
	getGame?: (slug: string) => IGame;
	addConsoleToGame?: (game: IGame, console: string) => void;
	removeConsoleToGame?: (game: IGame, console: string) => void;
	toggleConsoleToGame?: (game: IGame, console: string) => void;
}

const CollectionContext = React.createContext<CollectionContextProps>({
	collection: [],
});

export default CollectionContext;
