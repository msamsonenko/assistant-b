const express = require("express"); //import exprass package

const ctrl = require("../../controllers/apartments");
//wraps a function into try catch
const { ctrlWrapper } = require("../../helpers");
//midllewares authenticate - check token, validation - checks if fields of an apartment are corectly filled in,
//isValid - checks if id of an apartment is valid
const { authenticate, validation, isValiId } = require("../../middlewares");
const { apt } = require("../../models/apartment"); //Joi schema of an apartment

const router = express.Router(); //create express router

//define routes

//get all apartments
router.get("/", ctrlWrapper(ctrl.getAll));
//get one apartment by id
router.get("/:id", isValiId, ctrlWrapper(ctrl.getById));
//add new apartment
router.post("/", authenticate, validation(apt), ctrlWrapper(ctrl.add));
//update apartment info by id
router.put("/:id", isValiId, ctrlWrapper(ctrl.updateById));
//delete apartment
router.delete("/:id", isValiId, ctrlWrapper(ctrl.removeById));
//update tenants field of an apartment
router.patch("/:id/tenants", isValiId, ctrlWrapper(ctrl.updateTenants));

module.exports = router;
