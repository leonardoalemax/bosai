import GameList from "../components/GameList";
import CollectionContext from "../context/CollectionContext";
import useCollectionContext from "../hook/useCollectionContext";

import "./Collection.css";
import GameDisplay from "../components/GameDisplay";
import GameDisplayContext from "../context/GameDisplayContext";
import useGameContext from "../hook/useGameContext";
import { Divider } from "antd";
import GameSearchInput from "../components/GameSearchInput";

function Collection() {
	const collectionContext = useCollectionContext();
	const gameContext = useGameContext();

	return (
		<div className='App'>
			<CollectionContext.Provider value={collectionContext}>
				<GameDisplayContext.Provider value={gameContext}>
					<GameSearchInput />
					<Divider />
					<GameDisplay />
					<Divider />
					<GameList />
				</GameDisplayContext.Provider>
			</CollectionContext.Provider>
		</div>
	);
}

export default Collection;
