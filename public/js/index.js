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
var li = jQuery('<li></li>');
li.text(`${message.from}: ${message.text}`);
jQuery('#messages').append(li);

});

jQuery('#message-form').on('submit',function(e){
e.preventDefault();
socket.emit('createMessage',{
    from :'user',
    text:jQuery('[name=message]').val()

} , function(){

});
});