import { Tag } from "antd";
import { useContext, useMemo } from "react";
import GameContext from "../context/GameContext";

function GameTags({
	prop,
	color,
	type,
}: {
	prop: "consoles" | "developers";
	type: "general" | "user";
	color: string;
}) {
	const { game } = useContext(GameContext);

	const list = useMemo(() => {
		if (!prop && !game) return [];

		if (type === "general") return game?.[`${prop}`] as string[];

		if (type === "user" && prop !== "developers")
			return game?.userData?.[`${prop}`] as string[];

		return game?.[`${prop}`] as string[];
	}, [game, prop]);

	return (
		<>
			{list?.map((item: string, index: number) => (
				<>
					<Tag color={color} key={`${item}-${index}`}>
						{item}
					</Tag>
				</>
			))}
		</>
	);
}

export default GameTags;
