const { User } = require("../../models/user");
const { createError } = require("../../helpers");

const register = async (req, res, next) => {
	const { email } = req.body;
	const user = await User.findOne({ email });
	if (user) {
		throw createError(409, "Email is in use");
	}
	const result = await User.create(req.body);
	res.status(201).json({
		email: result.email,
		name: result.name,
	});
};

module.exports = register;
