const validation = (schema) => {
	const func = (req, res, next) => {
		console.log("validation output inside");
		const { error } = schema.validate(req.body);
		if (error) {
			error.status = 400;
			return next(error);
		}
		next();
	};
	console.log("validation output");
	return func;
};
module.exports = validation;
