const express = require("express");
const router = express.Router();
const {protect} = require("../../middlewares/studentAuth");

const {
    getModules,
    getExecuteModules
} = require("../../controllers/student/private");

router.route("/getModules/:stuName").get(protect, getModules);
router.route("/getExecuteModules/:className/:stuName").get(protect, getExecuteModules);

module.exports = router;