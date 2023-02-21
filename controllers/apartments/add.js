const { Apartment } = require("../../models/apartment"); // import Apartment model

const add = async (req, res) => {
	const { _id: owner } = req.user; //get id of the user requesting to add an apartment
	const result = await Apartment.create({ ...req.body, owner }); //creating new apartment based on received data, and sign who added the apartment
	res.status(201).json(result); // returning created apartment to front end
};
module.exports = add;
