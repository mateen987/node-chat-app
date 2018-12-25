const path= require('path');
const socketIo =require('socket.io');
var http =require('http');
const publicpath= path.join(__dirname, '../public');
const {generateMessage}=require('./utils/message');
const express= require('express');
const app=express();

var server = http.createServer(app);
var io= socketIo(server);


const port= process.env.PORT || 3000;
app.use(express.static(publicpath));

io.on('connection',(socket)=>{
    console.log('new user connected');

    socket.emit('newMessage', generateMessage('admin', 'welcome to chat app'));
    socket.broadcast.emit('newMessage', generateMessage('admin', 'new user message'));

       socket.on('createMessage',(message)=>{
        console.log('message created', message);

        io.emit('newMessage',generateMessage(message.from,message.text))

    });

    socket.on('disconnect',()=>{
        console.log('user disconnected');
    })
    })

server.listen(port,() => {
console.log(`server is running ${port}`);
});