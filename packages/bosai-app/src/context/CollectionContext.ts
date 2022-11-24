import React from "react";

import { IGame } from "../interfaces/game";

export interface CollectionContextProps {
	collection: IGame[];
	addGame?: (game: IGame) => void;
	updateGame?: (id: string, game: IGame) => void;
	removeGame?: (id: string) => void;
}

const CollectionContext = React.createContext<CollectionContextProps>({
	collection: [],
});

export default CollectionContext;
