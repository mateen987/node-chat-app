var socket = io();
socket.on('connect',function(){
console.log(' connected to server');

// socket.emit('createMessage',{
// from:'mateen3238@yahoo.com',
// text:'sir i have query',

// })
});

socket.on('disconnect', function(){
    console.log('disconnected from server');
})

socket.on('newMessage',function(message){
console.log('newMessage' ,message);
});