const { createError } = require("../../helpers");
const { Apartment } = require("../../models/apartment");

const getById = async (req, res) => {
	const { id } = req.params;
	const result = await Apartment.findById(id);
	if (!result) {
		throw createError(404);
	}
	res.json(result);
};

module.exports = getById;
