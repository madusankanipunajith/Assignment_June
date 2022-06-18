const express = require("express");
const router = express.Router();
const {protect} = require("../../middlewares/instructorAuth");

const {
    insertClassModule,
    getModules,
    getExecuteModules
} = require("../../controllers/instructor/private");

router.route("/insert").post(protect, insertClassModule);
router.route("/getModules").get(protect, getModules);
router.route("/getExecuteModules/:className").get(protect, getExecuteModules);

module.exports = router;