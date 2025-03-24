const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Listening from the server");
} );

app.use("/dev", (req, res) => {
    res.send("dev Response for the user request");
} );

app.use("/test", (req, res) => {
    res.send("test Response for the user request");
} );

app.use("/prod", (req, res) => {
    res.send("prod Response for the user request");
} );

app.use("/", (req, res) => {
    res.send("Namaste JS");
} );

//console.log("Hello world");