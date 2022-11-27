import { SelectOutlined } from "@ant-design/icons";
import { useContext } from "react";
import GameContext from "../context/GameContext";
import GameDisplayContext from "../context/GameDisplayContext";

function GameSelectButton() {
	const { game } = useContext(GameContext);
	const { updateGame } = useContext(GameDisplayContext);

	return (
		<SelectOutlined
			key='select'
			onClick={() => game?.slug && updateGame && updateGame(game)}
		/>
	);
}

export default GameSelectButton;
