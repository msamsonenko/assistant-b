const { createError } = require("../../helpers");
const { Apartment } = require("../../models/apartment"); // import Apartment model

const getById = async (req, res) => {
	const { id } = req.params; // get id from request body
	const result = await Apartment.findById(id); //check DB to find apartment
	//throw error if no apartment with such id found
	if (!result) {
		throw createError(404);
	}
	res.json(result); // return result to front end
};

module.exports = getById;
