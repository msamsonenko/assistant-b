const { Apartment } = require("../../models/apartment"); // import Apartment model

const add = async (req, res) => {
	const result = await Apartment.create(req.body); //creating new apartment based on received data
	res.status(201).json(result); // returning created apartment to front end
};
module.exports = add;
