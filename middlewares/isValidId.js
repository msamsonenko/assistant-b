const { isValidObjectId } = require("mongoose");
const { createError } = require("../helpers");

const isValiId = (req, res, next) => {
	const { id } = req.params;
	const result = isValidObjectId(id);
	if (!result) {
		const error = createError(400, "Invalid id");
		return next();
	}
	next();
};

module.exports = isValiId;
