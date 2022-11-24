import { Card } from "antd";
import { IGame } from "../interfaces/game";

const { Meta } = Card;

function GameCard({ game }: { game: IGame }) {
	return (
		<Card
			hoverable
			style={{ width: 240 }}
			cover={<img alt='example' src={game?.cover} />}>
			<Meta
				title={game?.title}
				description={game?.platforms?.join("|")}
			/>
		</Card>
	);
}

export default GameCard;
