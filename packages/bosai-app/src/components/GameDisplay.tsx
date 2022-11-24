import { useContext } from "react";
import { Select, Divider, Tag, Image } from "antd";

import "./GameDisplay.css";
import GameContext from "../context/GameContext";

function GameDisplay() {
	const { game } = useContext(GameContext);

	return (
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
					<label>platforms:</label>
					{game?.platforms &&
						game?.platforms.map((name: string) => (
							<Tag color='green' key={name}>
								{name}
							</Tag>
						))}
				</div>
				<div className='game-meta-row'>
					<label>companies:</label>
					{game?.involved_companies &&
						game?.involved_companies.map(({ company }: any) => (
							<>
								<Tag color='blue' key={company.name}>
									{company.name}
								</Tag>
							</>
						))}
				</div>
				<Divider />
				<Select
					style={{ width: 120 }}
					defaultValue='Platform'
					options={
						game?.platforms
							? game.platforms.map((e) => ({
									label: e,
									value: e,
							  }))
							: []
					}
				/>
			</div>
		</div>
	);
}

export default GameDisplay;
