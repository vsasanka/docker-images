const HTTP_PORT = 80

const cors = require('cors');
const express = require('express');
const path = require('path');

var sourceDirectory = path.resolve(__dirname, 'www');
var app = express();
app.use(cors());

app.get('/v1/square/:value',function (req, res){
const value = req.params.value;
const square = Math.pow(value, 2);
res.send({
value,
square
});
});

app.use(express.static(sourceDirectory, {
index: 'index.htm',
extensions: ['htm']
}));

var server = require('http').createServer(app);
server.listen(HTTP_PORT);

console.log(`Listening on http://localhost:${HTTP_PORT}`);
