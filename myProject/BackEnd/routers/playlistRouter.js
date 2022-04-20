const express = require("express");
const playlistController = require("../controllers/playlistController");
const router = express.Router();

router.get("", playlistController.getPlayList);
router.post("/:musicId", playlistController.addToMyPlayList);
router.delete("/:musicId", playlistController.deleteFromMyPlayList);

module.exports = router;
