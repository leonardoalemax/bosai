import { Button } from "antd";
import { useContext, useMemo } from "react";
import CollectionContext from "../context/CollectionContext";
import GameDisplayContext from "../context/GameDisplayContext";

function GameAddToCollection() {
	const { game } = useContext(GameDisplayContext);
	const { addGame, removeGame, getGame, collection } =
		useContext(CollectionContext);

	const collectionGame = useMemo(
		() => game && getGame && getGame(game.slug),
		[game, collection]
	);

	return (
		<Button
			type={collectionGame ? "primary" : "default"}
			disabled={!game}
			onClick={() => {
				if (collectionGame) {
					game && removeGame && removeGame(game.slug);
				} else {
					game && addGame && addGame(game);
				}
			}}>
			{" "}
			{!collectionGame
				? `Add ${game?.title} to your collection`
				: `Remove ${game?.title} from your collection`}
		</Button>
	);
}

export default GameAddToCollection;
