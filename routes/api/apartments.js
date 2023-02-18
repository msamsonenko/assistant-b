const express = require("express");

const ctrl = require("../../controllers/apartments");
const { ctrlWrapper } = require("../../helpers");
const { validation, isValiId } = require("../../middlewares");
const { apt } = require("../../models/apartment");

const router = express.Router();

//define routes
router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", isValiId, ctrlWrapper(ctrl.getById));

router.post("/", validation(apt), ctrlWrapper(ctrl.add));

router.put("/:id", isValiId, ctrlWrapper(ctrl.updateById));

router.delete("/:id", isValiId, ctrlWrapper(ctrl.removeById));
router.patch("/:id/tenants", isValiId, ctrlWrapper(ctrl.updateTenants));

module.exports = router;
