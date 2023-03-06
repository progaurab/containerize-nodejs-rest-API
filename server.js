const express = require('express')
const bodyParser = require('body-parser');


const app = express()
let port = 3070;

app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.send("It works!!");
})

// request to handle undefined or all other routes
app.get("*", function(req, res) {
    res.send("App works!!!!!");
})

app.listen(port, function(err) {
     console.log("running server on from port: " + port);
});