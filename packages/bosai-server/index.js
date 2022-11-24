const { search, getGameBySlug } = require("./api/igdb");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/v1/game/search/:term", async (req, res) => {
	const games = await search(req.params.term);

	return res.json(games);
});

app.get("/api/v1/game/:slug", async (req, res) => {
	const game = await getGameBySlug(req.params.slug);

	if (!game) return res.status(404).send("Not found");

	return res.json(game);
});

app.listen(process.env.PORT || "4200", () =>
	console.log(`Example app listening on port ${process.env.PORT || "4200"} !`)
);
