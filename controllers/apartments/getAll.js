const { Apartment } = require("../../models/apartment"); // import Apartment model

const getAll = async (req, res) => {
	const { _id: owner } = req.user; //get id of the user requesting to add an apartment
	const { page = 1, limit = 5 } = req.query; //get values of query params for pagination
	const skip = (page - 1) * limit;
	const result = await Apartment.find({ owner }, "-createdAt -updatedAt", {
		skip,
		limit: Number(limit),
	}).populate("owner", "email name"); // can use options to find stuff you need {}, "address floor tenants"
	res.json(result);
};

module.exports = getAll;
