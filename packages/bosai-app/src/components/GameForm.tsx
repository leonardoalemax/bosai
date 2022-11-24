import { Button, Divider } from "antd";

import GameSearch from "./GameSearch";

import "./GameForm.css";
import GameContext from "../context/GameContext";
import useGameContext from "../hook/useGameContext";
import GameDisplay from "./GameDisplay";
import CollectionContext from "../context/CollectionContext";
import { useContext } from "react";

function GameForm() {
	const gameContext = useGameContext();
	const { addGame } = useContext(CollectionContext);

	return (
		<div className='games-form'>
			<GameContext.Provider value={gameContext}>
				<GameSearch />
				<Divider />
				<GameDisplay />
				<Divider />
				<Button
					onClick={() => {
						gameContext.game &&
							addGame &&
							addGame(gameContext.game);
					}}>
					{" "}
					Add Game{" "}
				</Button>
			</GameContext.Provider>
		</div>
	);
}

export default GameForm;
