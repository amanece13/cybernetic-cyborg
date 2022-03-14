const express = require("express");

const router = express.Router();

// middlewares
const { tokenVerify } = require("../middlewares/authentication");
const { setHeaders } = require("../middlewares/setHeaders");

// controller
const { registerOrUpdateUser, getUser } = require("../controllers/authentication");

router.get("/test", getUser)
router.post("/register", setHeaders, tokenVerify, registerOrUpdateUser)
router.post("/login",setHeaders, tokenVerify, registerOrUpdateUser)
router.post("/update-user", tokenVerify, setHeaders, registerOrUpdateUser)


module.exports = router;