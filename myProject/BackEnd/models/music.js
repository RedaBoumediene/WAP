const musics = [
    {
      id: "1",
      title: "Numb",
      singer: "Linkin Park",
      link:
        "https://drive.google.com/uc?export=download&id=17mzOmOZJ0cuB73gL4r9h4wr0zmQBJV_S"
    },
    {
      id: "2",
      title: "Titanium",
      singer: "Sia",
      link:
        "https://drive.google.com/uc?export=download&id=1QRItoPJsJEc_MOOSG7tJVGJDp3bv1QNG"
    },
    {
      id: "3",
      title: "Hotel California",
      singer: "Eagles",
      link:
        "https://drive.google.com/uc?export=download&id=1ShjWIqzudWU9J2RIgDjv7Q7YRGSuC9Ci"
    },
    {
      id: "4",
      title: "Slim Shady",
      singer: "Eminem",
      link:
        "https://drive.google.com/uc?export=download&id=1dDcOQCV4o9STEorw7o-REcP-qH-0ixPd"
    },
    {
        id: "5",
        title: "Wind Of change",
        singer: "Scorpions",
        link:
          "https://drive.google.com/uc?export=download&id=1euzYrFCZv32tmjUQP7BNVXSVzHuQ6QYs"
      }
  ];

function search(word){
  word = word.toLowerCase();
  
  return musics.filter(w=>w.title.toLowerCase().includes(word)||w.singer.toLowerCase().includes(word));
}

function getAllMusics() {
    return musics;
}

module.exports = { getAllMusics , search};