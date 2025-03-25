const express = require("express");
const app = express();

app.use( "/user", 
    (req,res, next) => {
        console.log("Hello one");
        //res.send("Response 1");
        next();
    },
    (req, res, next) => {
        console.log("Hello two");
        //res.send("Response two");
        next();
    },
    (req, res) => {
        console.log("Hello three");
        res.send("Hello three");
    } 
);

app.listen(3000, () => {
    console.log("Listening from the server");
} );

/* app.post("/addUser", (req, res) => {
    console.log ( req.body  );
    res.send("user data added successfully");
} );

app.get("/getUser", (req, res) => {
    res.send({"firstname" : "Arun", "last_name" : "kumar" });
} );

app.post("/updateUser", (req, res) => {
    res.send("user data updated successfully");
} );

app.delete("/deleteUser", (req, res) => {
    res.send("user data deleted successfully");
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
} ); */

//console.log("Hello world");