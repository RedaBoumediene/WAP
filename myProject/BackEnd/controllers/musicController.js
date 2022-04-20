const musics = require("../models/music");

exports.getAllMusics = (req, res, next) => {
  console.log('Music Controller - getAllMusics , req.body = ',req.body);
  res.status(200).json(musics.getAllMusics());
};

exports.search = (req, res, next) => {
  console.log('Music search - -- , req.params = ',req.params);
  // res.status(200).json(musics.getAllMusics());
  try{
    console.log('Music Controller - search , req.body = ',req.params);
    let ms = musics.search(req.params.search);
    console.log('search = ',ms);
    res.json(ms);
  }catch(err){
    console.log("inside catch ",err)
  }
  
};