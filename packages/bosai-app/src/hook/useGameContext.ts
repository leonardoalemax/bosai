import { useState } from "react";
import { GameContextProps } from "../context/GameContext";

import { IGame } from "../interfaces/game";

const useGameContext = (): GameContextProps => {
	const [game, updateGame] = useState<IGame | undefined>();

	return {
		game,
		updateGame,
	};
};

export default useGameContext;
