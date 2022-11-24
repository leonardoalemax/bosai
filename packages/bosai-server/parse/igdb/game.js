const parseDate = require("./date");

const parseGame = ({
	name,
	slug,
	platforms,
	cover,
	release_dates,
	...rest
}) => ({
	title: name,
	slug: slug,
	platforms: platforms ? platforms?.map((platform) => platform.slug) : [],
	release_dates: release_dates
		? release_dates?.map((release_date) => parseDate(release_date.human))
		: [],
	cover: cover?.url?.replace("t_thumb", "t_cover_big"),
	...rest,
});

module.exports = parseGame;
