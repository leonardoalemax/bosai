import { Divider, Empty, Segmented, Typography } from "antd";
import { useContext, useState } from "react";

import GameRow from "./GameRow";
import GameCard from "./GameCard";

import "./GameList.css";
import CollectionContext from "../context/CollectionContext";
import GameContext from "../context/GameContext";

const { Title } = Typography;

function GameList() {
	const { collection } = useContext(CollectionContext);
	const [state, setState] = useState("list");

	return (
		<div className='game-list'>
			<Title level={5}>Game Collection:</Title>
			<Divider />
			<div className='filter'>
				<Segmented
					options={["List", "Cards"]}
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
			<Divider />
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
