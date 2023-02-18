const { Schema, model } = require("mongoose");
const buildSchema = require("./building");
const aptSchema = require("./apartment");

const securitySchema = Schema(
	{
		address: {
			type: String,
			required: true,
		},
		building: buildSchema,
		apartment: aptSchema,
	},
	{ versionKey: false, timestamps: true }
);

const Security = model("apartment", securitySchema);

module.exports = Security;
