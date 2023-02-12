const books = require("../../data/");
const { addSchema } = require("../../schema/books");
const { createError } = require("../../helpers");

const updateById = async (req, res) => {
	const { error } = addSchema.validate(req.body);
	if (error) {
		throw createError(400, error.message); //throw error if req.body is not valid
	}
	const { id } = req.params;
	const result = await books.updateById(id, req.body);
	if (!result) {
		throw createError(404);
	}
	res.json(result);
};

module.exports = updateById;
