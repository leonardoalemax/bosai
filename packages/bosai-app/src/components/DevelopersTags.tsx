import { Tag } from "antd";
import { useContext } from "react";
import GameContext from "../context/GameContext";

function DevelopersTags() {
	const { game } = useContext(GameContext);

	return (
		<>
			{game?.developers &&
				game?.developers.map((developer, index) => (
					<>
						<Tag color='red' key={`${developer}-${index}`}>
							{developer}
						</Tag>
					</>
				))}
		</>
	);
}

export default DevelopersTags;
