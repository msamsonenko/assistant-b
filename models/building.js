const { Schema, model } = require("mongoose");

const buildSchema = Schema(
	{
		street: {
			type: String,
			required: true,
			enum: ["free", "moderate", "busy"],
		},
		streetComment: {
			type: String,
			required: false,
		},
		entrance: {
			type: String,
			required: true,
			enum: ["from street", "from the yard", "both", "other"],
		},
		entryDoor: {
			state: {
				type: String,
				required: true,
				enum: ["old", "new", "solid", "robust", "poor"],
			},
			open: {
				type: String,
				required: true,
				enum: ["code", "key fob", "key", "concierge call"],
			},
		},
		concierge: {
			type: Boolean,
			required: true,
			default: false,
		},
		security: {
			type: Boolean,
			required: true,
			default: false,
		},
		parking: {
			type: Boolean,
			required: true,
			default: false,
		},
		cctv: {
			type: Boolean,
			required: true,
			default: false,
		},
		business: {
			type: Boolean,
			required: true,
			default: false,
		},
		lift: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{ versionKey: false }
);

// const Building = model("apartment", buildSchema);

module.exports = buildSchema;
