import { List, Avatar, theme } from "antd";

const { useToken } = theme;

import "./GameRow.css";
import { CSSProperties, useContext } from "react";
import GameContext from "../context/GameContext";
import GameTags from "./GameTags";
import GameDisplayContext from "../context/GameDisplayContext";

const { Item } = List;

function GameRow() {
	const { game } = useContext(GameContext);
	const { updateGame } = useContext(GameDisplayContext);

	const { token } = useToken();

	const itemStyle: CSSProperties = {
		backgroundColor: token.colorBgContainer,
		color: token.colorTextLabel,
		borderBottom: `1px solid ${token.colorBorder}`,
	};

	return (
		<Item
			onClick={() => {
				updateGame && updateGame(game);
			}}
			style={itemStyle}>
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
