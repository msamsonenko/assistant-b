const express = require("express");
const { ctrlWrapper } = require("../../helpers");

const ctrl = require("../../controllers/auth");
const { validation } = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
	"/register",
	validation(schemas.register),
	ctrlWrapper(ctrl.register)
);

module.exports = router;
