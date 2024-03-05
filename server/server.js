const express= require('express');
const bodyParser =require('body-parser');
const app=express();
app.use(bodyParser.json())
let userName=""
app.post("/api/login",(req,res)=>{
    console.log(req.body)
    userName=req.body.userId;
    res.json({"message":"form submitted"})
})
app.get("/api",(req,res)=>{
    res.json({"user":{userName}})
})
app.use("/",(req,res,next)=>{
    console.log('In the middleware');
})
app.listen(5001)