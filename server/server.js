const express=require("express");
const app=express();
const path=require("path");

const port=process.env.PORT || 3000;

var publicPath=path.join(__dirname,"../public");
app.use(express.static(publicPath));

app.listen(port,()=>{
  console.log("Server started");
})
