const { User } = require("../models/user"); //import user model
const jwt = require("jsonwebtoken"); //import token creator package
const { createError } = require("../helpers/createError");

const { SECRET_KEY } = process.env; //get SECRET_KEY from .env file

const authenticate = async (req, res, next) => {
	try {
		const { authorization } = req.headers; //extract authorization from headers
		const [bearer, token] = authorization.split(" "); // split into two, "Bearer" = bearer; "Token" = token
		//check bearer var
		if (bearer !== "Bearer") {
			throw createError(404);
		}
		try {
			const { id } = jwt.verify(token, SECRET_KEY); //verify if the token is valid
			const user = await User.findById(id); // find user by id
			//throw error if not found
			if (!user) {
				throw createError(404);
			}
			req.user = user; //add user to req.user
			next(); //pass over to next middleware
		} catch (error) {
			error.status = 401;
			throw error;
		}
	} catch (error) {
		next(error); //pass over to universal error function (app.js file)
	}
};

module.exports = authenticate;
