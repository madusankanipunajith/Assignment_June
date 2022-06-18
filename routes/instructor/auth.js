const express = require("express");
const router = express.Router();

const {
    login
} = require('../../controllers/instructor/auth');

router.post("/login", login);

module.exports = router;