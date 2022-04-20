const express = require("express");
const musicController = require("../controllers/musicController");
const router = express.Router();

router.get("", musicController.getAllMusics);
router.get("/:search",musicController.search);
module.exports = router;
