const express = require("express");
const { ctrlWrapper } = require("../../helpers");

const ctrl = require("../../controllers/auth");
const { validation, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
	"/register",
	validation(schemas.register),
	ctrlWrapper(ctrl.register)
);
router.post("/login", validation(schemas.login), ctrlWrapper(ctrl.login));
router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));
router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

module.exports = router;
