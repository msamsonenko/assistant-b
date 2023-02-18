const { Apartment } = require("../../models/apartment");
const { createError } = require("../../helpers");

const updateById = async (req, res) => {
	const { id } = req.params;
	const result = await Apartment.findByIdAndUpdate(id, req.body);
	if (!result) {
		throw createError(404);
	}
	res.json(result);
};

module.exports = updateById;
