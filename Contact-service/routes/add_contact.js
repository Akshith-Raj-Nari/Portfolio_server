const express = require("express");
const router = express.Router();
const { saveContact } = require("../controllers/SaveContact");

router.post("/", saveContact);

module.exports = router;
