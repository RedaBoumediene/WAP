const playlists = require("../models/playlist");

exports.getPlayList = (req, res, next) => {
    res.status(200).json(playlists.getPlayList());
};

exports.addToMyPlayList = (req, res, next) => {
  res.status(200).json(playlists.addToMyPlayList(req.params.musicId));
};

exports.deleteFromMyPlayList = (req, res, next) => {
  res.status(200).json(playlists.deleteFromMyPlayList(req.params.musicId));
};