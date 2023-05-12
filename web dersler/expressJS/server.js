const express = require("express");
const {accessControl}= require ("./middleware");

const users = [
{id : 1, name : "Didar Purliyew ", place : "Ankara"},
{id : 1, name : "Shohrat Purliyew ", place : "Mary"}
];

const app = express();

const PORT = 5000;
app.use(accessControl);// Uygulama Kapsamy

// Get Request 
// localhost : 5000/users
app.get("/users",(req,res,next)=>{
    res.json(users);
});

app.listen(PORT, ()=>{
    console.log("Server Started PORT "+ PORT);
});
