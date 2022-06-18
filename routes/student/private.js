const express = require("express");
const router = express.Router();
const {protect} = require("../../middlewares/studentAuth");

const {
    getModules
} = require("../../controllers/student/private");

router.route("/getModules/:stuName").get(protect, getModules);

module.exports = router;