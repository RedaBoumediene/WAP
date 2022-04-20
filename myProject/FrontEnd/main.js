window.addEventListener("load", function () {
    if (sessionStorage.getItem("usersession")) {
        document.getElementById("musicControl").style.display="none";
        document.getElementById("List-PlayList").style.display = "block";
        document.getElementById("search-logout").style.display ="flex";
        document.getElementById("Welcome").style.display = "none";
        document.getElementById("username-pass-login").style.display ="none";
        getAllMusic();
        getMyPlayList();
    } else {
        document.getElementById("musicControl").style.display="none";
        document.getElementById("List-PlayList").style.display = "none";
        document.getElementById("search-logout").style.display ="none";
        document.getElementById("Welcome").style.display = "block";
        document.getElementById("username-pass-login").style.display ="flex";
    }
});

var musics = [];

class User {
    constructor(id, username, password, token) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.token = token;
    }
}

async function login() {
    document.getElementById("error").innerText = "";
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username != "" && password != "") {
        let res = await fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(res => res.json());
        console.log(res);

        if (res.message) {
            document.getElementById("error").innerText = res.message;
        } else {
            document.getElementById("currentUser").innerText = username;
            getAllMusic();
            getMyPlayList();
            sessionStorage.setItem("usersession", res.token);
            document.getElementById("musicControl").style.display="none";
            document.getElementById("List-PlayList").style.display = "block";
            document.getElementById("search-logout").style.display ="flex";
            document.getElementById("Welcome").style.display = "none";
            document.getElementById("username-pass-login").style.display ="none";
        }
    }
}

async function getAllMusic() {
    document.getElementById("error").innerText = "";

    musics = await fetch("http://localhost:3000/musics", {
        method: "GET"
    }).then(res => res.json());

    for (let music of musics) {
        addMusicToTable(music.id, music.title, music.singer);
    }
}
async function AddMusicToPlayList(songId) {
    await fetch("http://localhost:3000/playlists/" + songId, {
        method: "POST"
    }).then(res => {
        getMyPlayList();
        return res.json();
    });
}

async function deleteMusicFromList(songId) {
    await fetch("http://localhost:3000/playlists/" + songId, {
        method: "DELETE"
    }).then(res => {
        getMyPlayList();
        return res.json();
    });
}
async function getMyPlayList() {
    let myPlayList = await fetch("http://localhost:3000/playlists", {
        method: "GET"
    }).then(res => res.json());
    var pl = document.getElementById("playListTable");
    pl.innerHTML=`<tr> <th style="width: 40% ">Remove Play</th> <th style="width: 60% ">Title</th> </tr>`;
    for (let music of myPlayList) {
        addRowToPlaylist(music.id, music.title);
    }
}

function addMusicToTable(id, title, singer) {
    var table = document.getElementById("musicList");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML =
        '<button class="btn btn-warning" onclick="AddMusicToPlayList(' +
        id +
        ')" >Favorit</button>';

    row.insertCell(1).innerHTML = title;
    row.insertCell(2).innerHTML = singer;

}

function addRowToPlaylist(id, title) {
    var table = document.getElementById("playListTable");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML =
        '<button class="btn btn-danger" onclick="deleteMusicFromList(' +
        id +
        ')" style="margin-right:50px" > Remove </button> <button class="btn btn-info" onclick="playMusic(' +
        id +
        ')" > Play </button>';
    row.insertCell(1).innerHTML = title;

}

function logout() {
    document.getElementById("currentUser").innerText = "";
    sessionStorage.removeItem("usersession");
    document.getElementById("musicControl").style.display="none";
    document.getElementById("List-PlayList").style.display = "none";
    document.getElementById("search-logout").style.display ="none";
    document.getElementById("Welcome").style.display = "block";
    document.getElementById("username-pass-login").style.display ="flex";
    //here
    document.getElementById("musicList").innerHTML = 
    `<tr>
        <th style="width: 20% ">add to favoris</th>
        <th style="width: 60% ">Title</th>
        <th style="width: 20% ">Singer</th>
    </tr>`;

    document.getElementById("playListTable").innerHTML=`<tr>
                        <th style="width: 40% ">Remove Play</th>
                        <th style="width: 60% ">Title</th>
                    </tr>`;
}

function stopMusic() {
    document.getElementById("musicControl").style.display = "none";
    document.getElementById("audio").src = "";
}
function playMusic(id) {
    document.getElementById("musicControl").style.display = "flex";
    let song = musics.filter(s => s.id == id)[0];
    console.log("Playing music ... ", song, id);
    document.getElementById("audio").src = song.link;
}

async function searchMusic() {
    console.log("searching music .. ");
    let search = document.getElementById("search").value;
    let musicList = await fetch("http://localhost:3000/musics/"+search,
        {
            method: "GET"
        }
    ).then(res => {console.log("result = ",res)
        return res.json();
    })

    document.getElementById("musicList").innerHTML = "";
    document.getElementById("musicList").innerHTML = `<tr>
                    <th style="width: 20% ">add to favoris</th>
                    <th style="width: 60% ">Title</th>
                    <th style="width: 20% ">Singer</th>
                </tr>`;
    for (let music of musicList) {
        addMusicToTable(music.id, music.title, music.singer);
    }
}