import { Segmented, List } from "antd";
import { useState } from "react";
import { IGame } from "../interfaces/game";
import GameRow from "./GameRow";
import GameCard from "./GameCard";

import "./GameList.css";

function GameList({ list }: { list: IGame[] }) {
	const [state, setState] = useState("cards");

	return (
		<div className='game-list'>
			<div className='filter'>
				<Segmented
					options={["Cards", "List"]}
					onChange={(e) => {
						setState(
							{
								List: "list",
								Cards: "cards",
							}[e] as string
						);
					}}
				/>
			</div>
			<div className={`games-list ${state}`}>
				{list &&
					list.map((game: any) =>
						state === "list" ? (
							<GameRow game={game} key={game.slug}></GameRow>
						) : (
							<GameCard game={game} key={game.slug}></GameCard>
						)
					)}
			</div>
		</div>
	);
}

export default GameList;
