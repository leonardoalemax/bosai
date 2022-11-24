import { Card } from "antd";
import { IGame } from "../interfaces/game";
import { DeleteOutlined } from "@ant-design/icons";
import { useContext } from "react";
import CollectionContext from "../context/CollectionContext";

const { Meta } = Card;

function GameCard({ game }: { game: IGame }) {
	const { removeGame } = useContext(CollectionContext);

	return (
		<Card
			hoverable
			style={{ width: 240 }}
			cover={<img alt='example' src={game?.cover} />}
			actions={[
				<DeleteOutlined
					key='trash'
					onClick={() => removeGame && removeGame(game.slug)}
				/>,
			]}>
			<Meta
				title={game?.title}
				description={game?.platforms?.join("|")}
			/>
		</Card>
	);
}

export default GameCard;
