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
		landlord: {
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
		owner: {
			type: Schema.Types.ObjectId,
			ref: "user",
		},
	},
	{ versionKey: false, timestamps: true }
);

const apt = Joi.object({
	address: Joi.string().required(),
	floor: Joi.number().required(),
	landlord: Joi.string(),
	tenants: Joi.string().required(),
	ukv: Joi.number().required(),
});

const Apartment = model("apartment", aptSchema);

module.exports = { Apartment, apt };
