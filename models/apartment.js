const { Schema, model } = require("mongoose");
const Joi = require("joi");

const aptSchema = Schema(
	{
		address: {
			type: String,
			required: true,
		},
		floor: {
			type: Number,
			required: true,
		},
		owner: {
			type: String,
			required: false,
		},
		tenants: {
			type: String,
			required: true,
		},
		ukv: {
			type: Number,
			required: true,
		},
	},
	{ versionKey: false, timestamps: true }
);

const apt = Joi.object({
	address: Joi.string().required(),
	floor: Joi.number().required(),
	owner: Joi.string(),
	tenants: Joi.string().required(),
	ukv: Joi.number().required(),
});

const Apartment = model("apartment", aptSchema);

module.exports = { Apartment, apt };
