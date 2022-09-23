const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');

let items =["Buy Food", "Cook Food", "Eat Food"];

let workItems = [];

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});

const itemsSchema = {
    name: String
}

app.get("/",function(req,res)
{
    let day = date.getDate();
    
   res.render("list", {listTitle: day, newListItems: items});
})

app.get("/work", function(req,res)
{
    res.render("list", {listTitle: "Work List", newListItems: workItems});
})

app.post("/work", function(req,res)
{
    let item=req.body.newItem;

    workItems.push(item);
    res.redirect("/work");
})

app.post("/", function(req,res)
{
    let item = req.body.newItem;
    // console.log(req.body.list);
    if(req.body.list === "Work")
    {
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }

})



app.listen(3000, function()
{
    console.log("Server is running on port 3000");
})