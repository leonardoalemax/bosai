import { Typography, Select, Spin } from "antd";
import { useRef, useMemo, useState, useContext } from "react";
import debounce from "lodash/debounce";

const { Title } = Typography;

import { IGame } from "../interfaces/game";
import GameDisplayContext from "../context/GameDisplayContext";

function GameSearchInput() {
	const { updateGame } = useContext(GameDisplayContext);
	const [options, setOptions] =
		useState<{ label: string; value: string }[]>();
	const [games, updateGames] = useState<IGame[]>();
	const [fetching, setFetching] = useState(false);
	const fetchRef = useRef(0);

	const debounceFetcher = useMemo(() => {
		async function load(term: string) {
			if (!term || term === "") return;

			fetchRef.current += 1;
			const fetchId = fetchRef.current;
			setOptions([]);
			setFetching(true);

			setFetching(true);
			const response = await fetch(
				`http://localhost:4200/api/v1/game/search/${term}`
			);
			const result = await response.text();

			if (fetchId !== fetchRef.current) {
				// for fetch callback order
				return;
			}

			const value = JSON.parse(result);

			const options = value.map((item: IGame) => ({
				label: item.title,
				value: item.slug,
			}));

			updateGames(value);
			setOptions(options);
			setFetching(false);
		}

		return debounce(load, 800);
	}, []);

	return (
		<div>
			<Title level={5}>Search game in IGDB®:</Title>
			<Select
				showSearch
				style={{ width: "100%" }}
				labelInValue
				filterOption={false}
				onSearch={debounceFetcher}
				onChange={(e) => {
					const changedGame = games?.filter(
						(g) => g.slug === e.value
					)[0];
					changedGame && updateGame && updateGame(changedGame);
				}}
				notFoundContent={fetching ? <Spin size='small' /> : null}
				options={options}
			/>
		</div>
	);
}

export default GameSearchInput;
