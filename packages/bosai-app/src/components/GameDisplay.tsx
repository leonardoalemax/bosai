import { useContext } from "react";
import { Image, Empty, Divider } from "antd";

import "./GameDisplay.css";
import GameDisplayContext from "../context/GameDisplayContext";
import ConsolesTags from "./ConsolesTags";
import DevelopersTags from "./DevelopersTags";
import FranchisesTags from "./FranchiseTags";
import GameAddToCollection from "./GameAddToCollection";
import GameActions from "./GameActions";
import { IGame } from "../interfaces/game";
import CollectionContext from "../context/CollectionContext";
import GameContext from "../context/GameContext";

function GameDisplay() {
	const { game } = useContext(GameDisplayContext);
	const { toggleConsoleToGame } = useContext(CollectionContext);

	return game ? (
		<GameContext.Provider value={{ game: game }}>
			<div className='game-display'>
				<div className='game-display-header'>
					<Image width={200} src={game?.cover} />
					<div className='game-meta'>
						<h1>{game?.title}</h1>
						<div className='game-meta-row'>
							<label>franchises:</label>
							<FranchisesTags />
						</div>
						<div className='game-meta-row'>
							<label>consoles:</label>
							<ConsolesTags />
						</div>
						<div className='game-meta-row'>
							<label>developers:</label>
							<DevelopersTags />
						</div>
					</div>
				</div>
				<div className='game-display-actions'>
					<Divider />
					<GameAddToCollection />
					<Divider />

					<GameActions
						prop='consoles'
						action={(g: IGame, item: string) => {
							toggleConsoleToGame && toggleConsoleToGame(g, item);
						}}
					/>
				</div>
			</div>
		</GameContext.Provider>
	) : (
		<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
	);
}

export default GameDisplay;
