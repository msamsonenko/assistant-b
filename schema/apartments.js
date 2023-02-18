const Joi = require("joi");

//draw validation schema
const addAptSchema = Joi.object({
	address: Joi.string().required(),
	building: Joi.string().required(),
});

module.exports = {
	addAptSchema,
};
