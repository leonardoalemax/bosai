import { Input } from "antd";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAsync } from "react-use";
import GameList from "../components/GameList";

const { Search } = Input;

import "./Search.css";

function SearchPage() {
	const [search, setSearch] = useSearchParams();

	const term = useMemo(() => {
		return search.get("term");
	}, [search]);

	const data = useAsync(async () => {
		if (!term || term === "") return;

		const response = await fetch(
			`http://localhost:4200/api/v1/game/search/${term}`
		);
		const result = await response.text();
		return result;
	}, [term]);

	const list = useMemo(() => {
		if (data.loading) return [];

		if (data.value) return JSON.parse(data.value);
	}, [data]);

	return (
		<div className='App'>
			<Search
				placeholder='input search text'
				allowClear
				enterButton='Search'
				size='large'
				defaultValue={search.get("term") || ""}
				onSearch={(e) => {
					setSearch({ term: e });
				}}
			/>

			<div className='result'>
				<GameList list={list} />
			</div>
		</div>
	);
}

export default SearchPage;
