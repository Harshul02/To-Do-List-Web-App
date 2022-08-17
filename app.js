const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.get("/", function(req,res)
{
    var today = new Date();

    if(today.getDay() === 6 || today.getDay()===0)
    {
        res.send("<h1>Yeh! It's a weekend</h1>");
    }
    else
    {
        res.sendFile(__dirname + "/index.html");
    }
})





app.listen(3000, function()
{
    console.log("Server is running on port 3000");
})