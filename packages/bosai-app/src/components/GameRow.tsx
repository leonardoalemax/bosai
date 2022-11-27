import { List, Avatar } from "antd";
import "./GameRow.css";
import { useContext } from "react";
import GameContext from "../context/GameContext";
import GameTags from "./GameTags";
import GameDeleteButton from "./GameDeleteButton";
import GameSelectButton from "./GameSelectButton";

const { Item } = List;

function GameRow() {
	const { game } = useContext(GameContext);

	return (
		<Item actions={[<GameDeleteButton />, <GameSelectButton />]}>
			<Item.Meta
				avatar={<Avatar shape='square' size={64} src={game?.cover} />}
				title={game?.title}
				description={
					<GameTags prop='consoles' type='user' color='green' />
				}
			/>
		</Item>
	);
}

export default GameRow;
