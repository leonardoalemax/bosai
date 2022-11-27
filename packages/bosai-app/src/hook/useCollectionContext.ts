import { isEmpty, remove, union } from "lodash";
import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import { CollectionContextProps } from "../context/CollectionContext";

import { IGame } from "../interfaces/game";
import { IGameUserData } from "../interfaces/gameUserData";

const useCollectionContext = (): CollectionContextProps => {
	const [value, setValue] = useLocalStorage<{ collection: IGame[] }>(
		"collection",
		{
			collection: [],
		}
	);

	const [collection, updateCollection] = useState<IGame[]>(
		value?.collection || []
	);

	useEffect(() => {
		setValue({
			collection,
		});
	}, [collection]);

	const mergeUserData = (oldData: any, newData: any) => {
		if (isEmpty(oldData) && isEmpty(newData)) return {};

		return {
			...oldData,
			...newData,
			consoles: union(oldData?.consoles || [], newData?.consoles || []),
		};
	};

	const updateGameData = (
		game: IGame,
		updateFunction?: (data: IGameUserData) => IGameUserData
	) => {
		updateCollection((stagedCollection) => {
			const filteredCollection = stagedCollection.filter(
				(g) => g.slug === game.slug
			);

			if (filteredCollection.length === 0)
				return [
					...stagedCollection,
					{
						...game,
						userData:
							updateFunction && updateFunction({ consoles: [] }),
					},
				];

			return stagedCollection.map((g) => {
				if (g.slug === game.slug)
					return {
						...g,
						userData: mergeUserData(
							g.userData,
							updateFunction ? updateFunction(g.userData) : {}
						),
					};

				return g;
			});
		});
	};

	const addConsoleToGame = (game: IGame, iconsole: string) =>
		updateGameData(game, (data: IGameUserData) => {
			return {
				...data,
				consoles: [...(data?.consoles || []), iconsole],
			};
		});

	const removeConsoleToGame = (game: IGame, iconsole: string) =>
		updateGameData(game, (data: IGameUserData) => {
			remove(data?.consoles || [], (c: string) => c === iconsole);
			console.log(data);
			return data;
		});

	const toggleConsoleToGame = (game: IGame, console: string) =>
		updateGameData(game, (data: IGameUserData) => {
			if (data?.consoles?.includes(console)) {
				remove(data?.consoles || [], (c: string) => c === console);
				return data;
			} else {
				return {
					...data,
					consoles: [...(data?.consoles || []), console],
				};
			}
		});

	const addGame = (game: IGame) => {
		updateGameData(game);
	};

	const removeGame = (slug: string) => {
		updateCollection((e) => e.filter((g) => g.slug !== slug));
	};

	const updateGame = (slug: string, game: IGame) => {
		updateCollection((e) =>
			e.map((g) => {
				if (g.slug === slug) {
					return game;
				} else {
					return g;
				}
			})
		);
	};

	const getGame = (slug: string) =>
		collection.filter((g) => g.slug === slug)[0];

	return {
		collection,
		addGame,
		updateGame,
		removeGame,
		getGame,
		addConsoleToGame,
		removeConsoleToGame,
		toggleConsoleToGame,
	};
};

export default useCollectionContext;
