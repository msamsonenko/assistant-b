const { Apartment } = require("../../models/apartment");

const add = async (req, res) => {
	const result = await Apartment.create(req.body);
	res.status(201).json(result);
};
module.exports = add;
