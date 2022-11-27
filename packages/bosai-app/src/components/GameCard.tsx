import { Card } from "antd";
import { useContext } from "react";
import GameContext from "../context/GameContext";
import GameTags from "./GameTags";
import GameDeleteButton from "./GameDeleteButton";
import GameSelectButton from "./GameSelectButton";

const { Meta } = Card;

function GameCard() {
	const { game } = useContext(GameContext);

	return (
		<Card
			hoverable
			style={{ width: 240 }}
			cover={<img alt='example' src={game?.cover} />}
			actions={[<GameDeleteButton />, <GameSelectButton />]}>
			<Meta title={game?.title} />
		</Card>
	);
}

export default GameCard;
