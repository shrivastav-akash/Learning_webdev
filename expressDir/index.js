const express = require("express");
const app = express();

let port = 3000;
app.listen(port, () => {
    console.log(`app is listening at port: ${port}`);
});

app.send((req, res), () => {
    console.log("req received");
    res.send("this is a basic responce");
})