const express = require("express")
const app = express();

let port = 3000;

app.get("/", (req, res) => {
    res.send("Heloo world nice meet you.");
});

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});

