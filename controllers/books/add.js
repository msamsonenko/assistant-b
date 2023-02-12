const books = require("../../data/");
const { addSchema } = require("../../schema/books");
const { createError } = require("../../helpers");

const add = async (req, res) => {
	const { error } = addSchema.validate(req.body);
	if (error) {
		throw createError(400, error.message); //throw error if req.body is not valid
	}
	const result = await books.add(req.body);
	res.status(201).json(result);
};
module.exports = add;
