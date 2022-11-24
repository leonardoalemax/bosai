require("dotenv").config();

const axios = require("axios");
const igdb = require("igdb-api-node").default;

const parseGame = require("../parse/igdb/game");

const getAuth = async () => {
	return (
		await axios.post(
			`https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`
		)
	).data;
};

const getGameBySlug = async (slug) => {
	if (!slug) return;

	const auth = await getAuth();

	const igdbClient = igdb(process.env.TWITCH_CLIENT_ID, auth.access_token);

	const { data } = await igdbClient
		.fields([
			"name",
			"id",
			"cover",
			"cover.url",
			"platforms",
			"platforms.name",
			"platforms.slug",
			"slug",
			"collection",
			"collection.name",
			"collection.slug",
			"release_dates",
			"release_dates.human",
			"genres",
			"genres.name",
			"franchises",
			"franchises.name",
		])
		.where(`slug = "${slug}"`)
		.request("/games");

	return data && data.length > 0 ? parseGame(data[0]) : null;
};

const search = async (searchTerm) => {
	if (!searchTerm) return;

	const auth = await getAuth();

	const igdbClient = igdb(process.env.TWITCH_CLIENT_ID, auth.access_token);

	const { data } = await igdbClient
		.fields([
			"name",
			"id",
			"cover",
			"cover.url",
			"platforms",
			"platforms.name",
			"platforms.slug",
			"slug",
			"collection",
			"collection.name",
			"first_release_date",
			"franchise",
			"collection.slug",
			"release_dates",
			"release_dates.human",
			"genres",
			"genres.name",
			"involved_companies",
			"involved_companies.developer",
			"involved_companies.company.name",
			"involved_companies.company.logo",
			"involved_companies.company.logo.url",
			"franchises",
			"franchises.name",
		])
		.search(searchTerm)
		.request("/games");

	return data.map((game) => parseGame(game));
};

module.exports = {
	getGameBySlug,
	search,
};
