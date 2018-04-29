const express=require("express");
const app=express();
const path=require("path");
const socketIO=require("socket.io");
const http=require('http');

const port=process.env.PORT || 3000;

var publicPath=path.join(__dirname,"../public");
var server=http.createServer(app);
var io=socketIO(server);

app.use(express.static(publicPath));

io.on("connection",(socket)=>{
  console.log("New User connected");

    socket.on("createMessage",(message)=>{
      //console.log("createMessage ",message);
      io.emit("newMessage",{
        from:message.from,
        text:message.text,
        createdAt:new Date().getTime()
      })
    })
  socket.on('disconnect',(socket)=>{
    console.log("Client disconnected");
  });

});

server.listen(port,()=>{
  console.log("Server started");
})
