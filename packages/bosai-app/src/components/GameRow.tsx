import { List, Avatar } from "antd";
import { IGame } from "../interfaces/game";
import "./GameRow.css";
import { DeleteOutlined } from "@ant-design/icons";
import { useContext } from "react";
import CollectionContext from "../context/CollectionContext";

const { Item } = List;

function GameRow({ game }: { game: IGame }) {
	const { removeGame } = useContext(CollectionContext);

	return (
		<Item
			actions={[
				<DeleteOutlined
					key='trash'
					onClick={() => removeGame && removeGame(game.slug)}
				/>,
			]}>
			<Item.Meta
				avatar={<Avatar shape='square' size={64} src={game?.cover} />}
				title={game?.title}
				description={game?.platforms?.join("|")}
			/>
		</Item>
	);
}

export default GameRow;
