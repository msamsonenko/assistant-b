const { Apartment } = require("../../models/apartment");

const getAll = async (req, res) => {
	const result = await Apartment.find(); // can use options to find stuff you need {}, "address floor tenants"
	res.json(result);
};

module.exports = getAll;