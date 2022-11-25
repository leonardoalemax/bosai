import { useContext } from "react";
import { Select, Divider, Tag, Image, Empty } from "antd";

import "./GameDisplay.css";
import GameContext from "../context/GameContext";

function GameDisplay() {
	const { game } = useContext(GameContext);

	return game ? (
		<div className='game-display'>
			<Image width={200} src={game?.cover} />
			<div className='game-meta'>
				<h1>{game?.title}</h1>
				<div className='game-meta-row'>
					<label>franchises:</label>
					{game?.franchises &&
						game?.franchises.map(({ name }: { name: string }) => (
							<Tag color='magenta' key={name}>
								{name}
							</Tag>
						))}
				</div>
				<div className='game-meta-row'>
					<label>consoles:</label>
					{game?.consoles &&
						game?.consoles.map((name: string) => (
							<Tag color='green' key={name}>
								{name}
							</Tag>
						))}
				</div>
				<div className='game-meta-row'>
					<label>developers:</label>
					{game?.developers &&
						game?.developers.map(({ company }: any) => (
							<>
								<Tag color='blue' key={company.name}>
									{company.name}
								</Tag>
							</>
						))}
				</div>
			</div>
		</div>
	) : (
		<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
	);
}

export default GameDisplay;
