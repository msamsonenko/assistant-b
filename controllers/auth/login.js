const { User } = require("../../models/user"); //mongoose schema for an user object created in the database
const { createError } = require("../../helpers"); //function for throwing errors
const bcrypt = require("bcryptjs"); //package for encrypting passwords
const jwt = require("jsonwebtoken"); //package for creating tokens

const { SECRET_KEY } = process.env; // SECRET_KEY is needed for jsonwebtoken packege to create tokens. Stored in .env file

const login = async (req, res) => {
	const { email, password } = req.body; //take user input from req.body
	const user = await User.findOne({ email }); //chek if a user with such email is registered
	//check if email is in database, if not thro error
	if (!user) {
		throw createError(401, "Email or password is invalid");
	}
	//check if password correct for this email, if not throw error
	if (!bcrypt.compare(password, user.password)) {
		throw createError(401, "Email or password is invalid");
	}
	//payload is needed to create token, usually taken from user id
	const payload = {
		id: user._id,
	};
	//create token
	const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
	await User.findByIdAndUpdate(user._id, { token }); //find user by id and and assign token value to the token field
	res.json({ token }); //send token as response to front end
};

module.exports = login;
