import { Button, Divider } from "antd";

import { IGame } from "../interfaces/game";
import GameSearch from "./GameSearch";

import "./GameForm.css";
import GameContext from "../context/GameContext";
import useGameContext from "../hook/useGameContext";
import GameDisplay from "./GameDisplay";

function GameForm({ onChange }: { onChange: (e: IGame) => void }) {
	const gameContext = useGameContext();

	return (
		<div className='games-form'>
			<GameContext.Provider value={gameContext}>
				<GameSearch />
				<Divider />
				<GameDisplay />
				<Divider />
				<Button
					onClick={() => {
						gameContext.game && onChange(gameContext.game);
					}}>
					{" "}
					Add Game{" "}
				</Button>
			</GameContext.Provider>
		</div>
	);
}

export default GameForm;
