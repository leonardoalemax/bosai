import React, { Dispatch, SetStateAction } from "react";

import { IGame } from "../interfaces/game";

export interface GameContextProps {
	game?: IGame;
	updateGame?: Dispatch<SetStateAction<IGame | undefined>>;
}

const GameContext = React.createContext<GameContextProps>({
	game: undefined,
});

export default GameContext;
