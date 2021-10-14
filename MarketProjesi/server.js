const express = require('express');
const socket = require('socket.io');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

require('./routes/routeManager')(app);

const server = app.listen(8080, function() {
    console.log('Server Running')
})

const io = socket(server)


const xnamespace = io.of("/xnamespace")
//const ynamespace = io.of("/ynamespace")

xnamespace.on("connection", socket =>{
    debugger;
    //console.log("connect xnamespace");
    socket.on("login", data =>{
        console.log('data', data);
        socket.join(data.url, () =>{
            //console.log('Odaya Bağlandı' + data.url);
        });
        xnamespace.in(data.url).emit("message", data);
    })
})

//ynamespace.on("connection", socket =>{
//    console.log("connect ynamespace")
//})
