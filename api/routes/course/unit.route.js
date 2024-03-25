const unitController = require("../../controllers/unit.controller");
const express = require("express");
const router = express.Router();
const Validator = require("../../request/validateRequest");

router.post("/", Validator("unitStore"), unitController.create);
router.get("/", unitController.index);
router.delete("/:id", unitController.remove);
router.get("/:id", unitController.show);
router.put("/:id", Validator("unitUpdate"), unitController.update);

module.exports = router;
