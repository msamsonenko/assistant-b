const Joi = require("joi");

//draw validation schema
const addSchema = Joi.object({
	title: Joi.string().required(),
	author: Joi.string().required(),
});

module.exports = {
	addSchema,
};
