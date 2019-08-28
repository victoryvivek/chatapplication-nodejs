const express=require('express');
const app=express();

const socket=require('socket.io');

app.use(express.static('public'));

var server=app.listen(3000,()=>{
    console.log('Server started');
});

var io = socket(server);
io.on('connection', (socket) => {
    
    socket.on('chat', (data) => {
        io.sockets.emit('chat',data);   
    });

    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data);
    });
});

