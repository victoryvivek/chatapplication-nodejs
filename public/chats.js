var socket=io.connect('http://localhost:3000');

var sendMessage=()=>{
    socket.emit('chat', {
        message: document.getElementById('message').value,
        handle: document.getElementById('handle').value,
    });
}

var isTyping= ()=>{
    socket.emit('typing',{
        userhandle: document.getElementById('handle').value,
    });
}



socket.on('chat',(data)=>{
    document.getElementById('feedback').innerHTML='';
    document.getElementById('output').innerHTML += '<p><strong>' + data.handle + '</strong>: ' + data.message + '</p>';
});

socket.on('typing',(data)=>{
    document.getElementById('feedback').innerHTML='<p><em> '+data.userhandle+' is typing message </em></p>';
});