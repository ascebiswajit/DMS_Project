const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000

app.get("/",(req,res)=>{ 
    res.send("App Is Running")
});

app.listen(PORT,console.log("Server Started on Port 5000"))