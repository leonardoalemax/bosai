const parseDate = (date) => {
	return new Date(date).toLocaleDateString("pt-BR");
};

module.exports = parseDate;
