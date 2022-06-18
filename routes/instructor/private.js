const express = require("express");
const router = express.Router();
const {protect} = require("../../middlewares/instructorAuth");

const {
    insertClassModule
} = require("../../controllers/instructor/private");

router.route("/insert").post(protect, insertClassModule);

module.exports = router;