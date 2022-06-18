const express = require("express");
const router = express.Router();
const {protect} = require("../../middlewares/adminAuth");

const {
    insertInstructor,
    getModules,
    getExecuteModules
} = require("../../controllers/admin/private");

router.route("/insert").post(protect, insertInstructor);
router.route("/getModules").get(protect, getModules);
router.route("/getExecuteModules/:className").get(protect, getExecuteModules);

module.exports = router;