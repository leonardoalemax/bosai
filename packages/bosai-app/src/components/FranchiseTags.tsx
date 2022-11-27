import { Tag } from "antd";
import { useContext } from "react";
import GameContext from "../context/GameContext";

function FranchisesTags() {
	const { game } = useContext(GameContext);

	return (
		<>
			{game?.franchises &&
				game?.franchises.map((franchise, index) => (
					<>
						<Tag color='blue' key={`${franchise.name}-${index}`}>
							{franchise.name}
						</Tag>
					</>
				))}
		</>
	);
}

export default FranchisesTags;
