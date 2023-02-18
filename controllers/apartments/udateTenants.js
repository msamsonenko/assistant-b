const { Apartment } = require("../../models/apartment");
const { createError } = require("../../helpers");

const updateTenants = async (req, res) => {
	const { id } = req.params;
	const result = await Apartment.findByIdAndUpdate(id, req.body);
	if (!result) {
		throw createError(404);
	}
	res.json(result);
};

module.exports = updateTenants;
