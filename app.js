const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req,res)
{
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    if(today.getDay() === 6 || today.getDay()===0)
    {
        day= "Weekend";
    }
    else
    {
        day="Weekday";
    }

    res.render("list", {kindOfDay: day});
})





app.listen(3000, function()
{
    console.log("Server is running on port 3000");
})