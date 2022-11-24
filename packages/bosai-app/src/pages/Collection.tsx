import { Button } from "antd";
import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

import GameForm from "../components/GameForm";
import GameList from "../components/GameList";
import { IGame } from "../interfaces/game";

import "./Collection.css";

function Collection() {
	const [value, setValue] = useLocalStorage<{ list: IGame[] }>("collection", {
		list: [],
	});

	const [list, updateList] = useState<IGame[] | undefined>(value?.list);

	useEffect(() => {
		list && setValue((value) => ({ ...value, list }));
	}, [list]);

	return (
		<div className='App'>
			<GameForm
				onChange={(e) => {
					updateList((v) => {
						if (v) return [...v, e];
					});
				}}
			/>

			{list && list?.length > 0 && <GameList list={list} />}
		</div>
	);
}

export default Collection;
