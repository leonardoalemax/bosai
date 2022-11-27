import { Tag } from "antd";
import { useContext } from "react";
import GameContext from "../context/GameContext";

function ConsolesTags() {
	const { game } = useContext(GameContext);

	return (
		<>
			{game?.consoles &&
				game?.consoles.map((console, index) => (
					<>
						<Tag color='green' key={`${console}-${index}`}>
							{console}
						</Tag>
					</>
				))}
		</>
	);
}

export default ConsolesTags;
