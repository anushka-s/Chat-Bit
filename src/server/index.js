/**
 * @file filename (index.js)
 * @author yourfullname <something@nothing.com>
 * @version 0.0.1
 * @copyright Fake Inc.
 * @since date
 */


var app = require('http').createServer()
var io = module.exports.io = require('socket.io')(app)

const PORT = process.env.PORT || 3231

const SocketManager = require('./SocketManager')

io.on('connection', SocketManager)

app.listen(PORT, ()=>{
    console.log("Connected to port:" + PORT);
})