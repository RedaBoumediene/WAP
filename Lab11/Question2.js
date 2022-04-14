const http = require("http");
const fs = require("fs");

const server = http.createServer();
server.on('request', function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        const src = fs.createReadStream("./picture.jpg"); //img path
        src.pipe(res);
});
server.listen(3000);
