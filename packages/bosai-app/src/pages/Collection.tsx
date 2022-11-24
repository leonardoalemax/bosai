import GameForm from "../components/GameForm";
import GameList from "../components/GameList";
import CollectionContext from "../context/CollectionContext";
import useCollectionContext from "../hook/useCollectionContext";

import "./Collection.css";

function Collection() {
	const collectionContext = useCollectionContext();

	return (
		<div className='App'>
			<CollectionContext.Provider value={collectionContext}>
				<GameForm />
				<GameList />
			</CollectionContext.Provider>
		</div>
	);
}

export default Collection;
