const music = require("./music");

let myPlayList = [];

function getPlayList() {
  return music.getAllMusics().filter(s => myPlayList.includes(s.id));
}

function addToMyPlayList(id) {
  const index = myPlayList.findIndex(u => u.id == id);
  if(index>-1){
  }else
    myPlayList.push(id);
    
}

function deleteFromMyPlayList(id) {
  //console.log("id = ",id);
  //console.log("myPlayList = ",myPlayList);
  myPlayList = myPlayList.filter(u=>u!=id);
}

module.exports = { getPlayList, addToMyPlayList, deleteFromMyPlayList };
