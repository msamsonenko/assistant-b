const books = require("../../data/");
const { createError } = require("../../helpers");

const getById = async (req, res) => {
	const { id } = req.params;
	const result = await books.getById(id);
	if (!result) {
		throw createError(404);
	}
	res.json(result);
};

module.exports = getById;
