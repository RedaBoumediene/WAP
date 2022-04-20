const express = require("express");
const loginRouter = require("./routers/loginRouter");
const musicRouter = require("./routers/musicRouter");
const playlistRouters = require("./routers/playlistRouter");

const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/users", loginRouter);
app.use("/musics", musicRouter);
app.use("/playlists", playlistRouters);

app.listen(3000, () => console.log("listening to 3000..."));
