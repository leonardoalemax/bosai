const parseDate = require("./date");

const platformsMap = {
	playstation: ["psp", "ps2", "ps3", "ps4", "ps5", "ps4--1", "ps"],
	nintendo: ["gba", "3ds", "gbc", "nes", "snes", "sfam", "game-and-watch"],
	microsoft: ["xbox", "xbox360", "xboxone", "series-x", "series-s"],
	pc: ["win", "linux", "mac"],
	mobile: ["android", "ios"],
};

const parseGame = ({
	name,
	slug,
	platforms,
	cover,
	release_dates,
	involved_companies,
	...rest
}) => {
	return {
		title: name,
		slug: slug,
		consoles: platforms ? platforms?.map((platform) => platform.name) : [],
		release_dates: release_dates
			? release_dates?.map((release_date) =>
					parseDate(release_date.human)
			  )
			: [],
		cover: cover?.url?.replace("t_thumb", "t_cover_big"),
		developers: involved_companies?.filter((e) => e.developer),
		...rest,
	};
};

module.exports = parseGame;
