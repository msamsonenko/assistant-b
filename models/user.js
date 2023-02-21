const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegExp = /^[a-z0-9]+@gmail\.com$/;

const userSchema = Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			match: emailRegExp,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
		token: {
			type: String,
			default: "",
		},
	},
	{ versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

const register = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().pattern(emailRegExp).required(),
	password: Joi.string().min(6).required(),
});
const login = Joi.object({
	email: Joi.string().pattern(emailRegExp).required(),
	password: Joi.string().min(6).required(),
});

const schemas = {
	register,
	login,
};

module.exports = {
	User,
	schemas,
};
