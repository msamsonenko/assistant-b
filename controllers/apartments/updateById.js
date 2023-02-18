const { Apartment } = require("../../models/apartment"); // import Apartment model
const { createError } = require("../../helpers");

const updateById = async (req, res) => {
	const { id } = req.params; // take id from request body
	const result = await Apartment.findByIdAndUpdate(id, req.body); // find apartment by id and update all field, even if only one field is getting updated
	//throw error if no apartment with such id
	if (!result) {
		throw createError(404);
	}
	res.json(result);
};

module.exports = updateById;
