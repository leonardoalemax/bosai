import { useState } from "react";
import { Select, Button, Divider, Tag, Image, Descriptions } from "antd";

import { IGame } from "../interfaces/game";
import GameSearch from "./GameSearch";

import "./GameForm.css";

function GameForm({ onChange }: { onChange: (e: IGame) => void }) {
	const [game, updateGame] = useState<IGame>();

	return (
		<div className='games-form'>
			<GameSearch
				onChange={(e) => {
					updateGame(e);
				}}
			/>
			<Divider />

			<div className='game-display'>
				<Image width={200} src={game?.cover} />
				<div className='game-meta'>
					<h1>{game?.title}</h1>
					<div className='game-meta-row'>
						<label>franchises:</label>
						{game?.franchises &&
							game?.franchises.map(
								({ name }: { name: string }) => (
									<Tag color='magenta' key={name}>
										{name}
									</Tag>
								)
							)}
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

			<Divider />
			<Button
				onClick={() => {
					game && onChange(game);
				}}>
				{" "}
				Add Game{" "}
			</Button>
		</div>
	);
}

export default GameForm;
