import GameList from "../components/GameList";
import CollectionContext from "../context/CollectionContext";
import useCollectionContext from "../hook/useCollectionContext";

import GameDisplay from "../components/GameDisplay";
import GameDisplayContext from "../context/GameDisplayContext";
import useGameContext from "../hook/useGameContext";
import { theme, Space } from "antd";
const { useToken } = theme;

import GameSearchInput from "../components/GameSearchInput";
import { CSSProperties } from "react";

function Collection() {
	const collectionContext = useCollectionContext();
	const gameContext = useGameContext();
	const token = useToken();

	const blockStyle: CSSProperties = {
		backgroundColor: token?.token.colorBgBase,
		borderRadius: token?.token.borderRadius,
		width: "100%",
		padding: token?.token.paddingContentHorizontal,
	};

	return (
		<CollectionContext.Provider value={collectionContext}>
			<GameDisplayContext.Provider value={gameContext}>
				<Space direction='vertical' size='middle'>
					<div style={blockStyle}>
						<GameSearchInput />
					</div>
					<div style={blockStyle}>
						<GameDisplay />
					</div>
					<div style={blockStyle}>
						<GameList />
					</div>
				</Space>
			</GameDisplayContext.Provider>
		</CollectionContext.Provider>
	);
}

export default Collection;
