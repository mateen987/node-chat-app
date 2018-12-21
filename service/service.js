const path= require('path');
const socketIo =require('socket.io');
var http =require('http');
const publicpath= path.join(__dirname, '../public');
const express= require('express');
const app=express();

var server = http.createServer(app);
var io= socketIo(server);


const port= process.env.PORT || 3000;
app.use(express.static(publicpath));

io.on('connection',(socket)=>{
    console.log('new user connected');

    socket.emit('newMessage',{
       from :'abdulmateen334@gmail.com',
       text:'hello what`s up',
       createAt:123,
    })
    socket.on('createMessage',(message)=>{
        console.log('message created', message);
    })
    socket.on('disconnect',()=>{
        console.log('user disconnected');
    })
    })

server.listen(port,() => {
console.log(`server is running ${port}`);
});