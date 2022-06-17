const express = require("express");
const router = express.Router();
const {protect} = require("../../middlewares/adminAuth");

const {
    insertInstructor
} = require("../../controllers/admin/private");

router.route("/insert").post(protect, insertInstructor);

module.exports = router;