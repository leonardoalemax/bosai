import { List, Avatar } from "antd";
import { IGame } from "../interfaces/game";
import "./GameRow.css";

const { Item } = List;

function GameRow({ game }: { game: IGame }) {
	return (
		<Item>
			<Item.Meta
				avatar={<Avatar shape='square' size={64} src={game?.cover} />}
				title={game?.title}
				description={game?.platforms?.join("|")}
			/>
		</Item>
	);
}

export default GameRow;
