import React, { Dispatch, SetStateAction } from "react";

import { IGame } from "../interfaces/game";

export interface GameDisplayContextProps {
	game?: IGame;
	updateGame?: Dispatch<SetStateAction<IGame | undefined>>;
}

const GameDisplayContext = React.createContext<GameDisplayContextProps>({
	game: undefined,
});

export default GameDisplayContext;
