const express = require("express");
const router = express.Router();
const {protect} = require("../../middlewares/instructorAuth");

const {
    insertClassModule,
    getModules
} = require("../../controllers/instructor/private");

router.route("/insert").post(protect, insertClassModule);
router.route("/getModules").get(protect, getModules);

module.exports = router;