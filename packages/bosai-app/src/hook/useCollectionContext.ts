import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import { CollectionContextProps } from "../context/CollectionContext";

import { IGame } from "../interfaces/game";

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

	const addGame = (game: IGame) => {
		updateCollection((e) => [...e, game]);
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

	return {
		collection,
		addGame,
		updateGame,
		removeGame,
	};
};

export default useCollectionContext;
