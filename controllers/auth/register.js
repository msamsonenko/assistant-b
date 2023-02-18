const { User } = require("../../models/user"); //mongoose schema for an user object created in the database
const { createError } = require("../../helpers"); //a function for throwing errors
const bcrypt = require("bcryptjs"); //package for encrypting passwords

const register = async (req, res, next) => {
	const { email, password } = req.body; //take user input from req.body
	const user = await User.findOne({ email }); //check for this email in database
	//if the email is in database already throw error
	if (user) {
		throw createError(409, `A user with the email ${email} already exists`);
	}
	//hash password and add 10 pcs of salt
	const hashPassword = await bcrypt.hash(password, 10);
	//create new user, and add hashed password to DB
	const result = await User.create({ ...req.body, password: hashPassword });
	//send response to frontend, that a new user created. Note: exclude the password field
	res.status(201).json({
		email: result.email,
		name: result.name,
	});
};

module.exports = register;
