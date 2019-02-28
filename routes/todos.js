var express = require("express");
var router = express.Router();
var connect = require("./connect");

router.get("/", function(req, res, next) {
    res.render("index", { title: "My TODO App" });
});

let db;

router.get("/viewAll", (req, res, next) => {
    let myData = db.collection("toDos");

    myData.find({}).toArray((err, todos) => {
        if (err) {
            return res.status(500).json({ error: err, message: "Unlucky" });
        }

        todos.forEach(function(doc) {
            console.log(doc);
        });
        res.json({ todos });
    });
});

connect("toDoData").then(database => {
    db = database;
});
module.exports = router;
