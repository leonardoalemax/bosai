import { DeleteOutlined } from "@ant-design/icons";
import { useContext } from "react";
import CollectionContext from "../context/CollectionContext";
import GameContext from "../context/GameContext";

function GameDeleteButton() {
	const { game } = useContext(GameContext);
	const { removeGame } = useContext(CollectionContext);

	return (
		<DeleteOutlined
			key='trash'
			onClick={() => game?.slug && removeGame && removeGame(game?.slug)}
		/>
	);
}

export default GameDeleteButton;
