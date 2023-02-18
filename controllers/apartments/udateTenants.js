const { Apartment } = require("../../models/apartment"); // import Apartment model
const { createError } = require("../../helpers");

const updateTenants = async (req, res) => {
	const { id } = req.params; // take id from request body
	const result = await Apartment.findByIdAndUpdate(id, req.body); // find apartment by id and update
	//throw error if no apartment with such id
	if (!result) {
		throw createError(404);
	}
	//return result to front end
	res.json(result);
};

module.exports = updateTenants;
