const express = require("express")
const app = express();
const db = require('./db')

require("dotenv").config();

const port = 4000;


app.get("/",function(req,res){
  res.send("welcome to my server how can i help u")
})
app.get("/first",(req,res)=>{
  res.send("wht u looking for u baka  ")
})

app.get("/idli",(req,res)=>{
  const idli = {
    name: "ravaIdli",
    is_sambhr: true,
    is_chutney: false
  }
  res.send(idli)
})

app.post("/items",(req,res)=>{
  console.log("data is saved ")
  res.send("data is saved ")
})

app.listen(process.env.PORT, ()=>{
  console.log(`server is listening on port ${port}`)
})


// installing new package dotenv with npm i dotenv