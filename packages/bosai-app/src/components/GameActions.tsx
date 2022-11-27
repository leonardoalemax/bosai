import { Button } from "antd";
import { useContext, useMemo } from "react";
import CollectionContext from "../context/CollectionContext";
import GameContext from "../context/GameContext";
import { IGame } from "../interfaces/game";

import "./GameActions.css";

function GameActions({
	prop,
	action,
}: {
	prop: "consoles";
	action: (game: IGame, item: string) => void;
}) {
	const { game } = useContext(GameContext);
	const { getGame } = useContext(CollectionContext);

	const collection = useMemo(() => {
		const gameInCollection = game && getGame && getGame(game.slug);

		return gameInCollection?.userData?.[`${prop}`] as string[];
	}, [game, getGame]);

	const list = useMemo(() => {
		if (!prop && !game) return [];

		return game?.[`${prop}`] as string[];
	}, [game, prop]);

	return (
		<div className='game-actions'>
			{list?.map((item: string, index: number) => (
				<Button
					type={collection?.includes(item) ? "primary" : "default"}
					onClick={() => {
						game && action(game, item);
					}}
					key={`${item}-${index}`}>
					{item}
				</Button>
			))}
		</div>
	);
}

export default GameActions;
