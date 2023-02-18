const { Apartment } = require("../../models/apartment"); // import Apartment model
const { createError } = require("../../helpers");

const removeById = async (req, res) => {
	const { id } = req.params; // take id from request body
	const result = await Apartment.findByIdAndRemove(id); // check DB for apartment with such id and remove it from DB
	//throw error if the apartment doesn't exist
	if (!result) {
		throw createError(404);
	}
	//return response to front end
	res.json({
		message: "Book deleted",
	});
};

module.exports = removeById;
