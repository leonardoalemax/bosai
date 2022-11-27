import { Empty, Segmented } from "antd";
import { useContext, useState } from "react";

import GameRow from "./GameRow";
import GameCard from "./GameCard";

import "./GameList.css";
import CollectionContext from "../context/CollectionContext";
import GameContext from "../context/GameContext";

function GameList() {
	const { collection } = useContext(CollectionContext);
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
			{collection.length > 0 ? (
				<div className={`games-list ${state}`}>
					{collection &&
						collection.map((game: any) => (
							<GameContext.Provider
								value={{ game: game }}
								key={game.slug}>
								<>
									{state === "list" ? (
										<GameRow />
									) : (
										<GameCard />
									)}
								</>
							</GameContext.Provider>
						))}
				</div>
			) : (
				<Empty />
			)}
		</div>
	);
}

export default GameList;
