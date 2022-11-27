const parseDate = require("./date");

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
		developers: involved_companies
			?.filter((e) => e.developer)
			.map((d) => d.company.name),
		...rest,
	};
};

module.exports = parseGame;
