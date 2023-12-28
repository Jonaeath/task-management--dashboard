const express = require('express');
const app = express();

const port = 4000;


app.get("/", async (req, res) => {
    res.send("Server is running");
  });

app.listen(port, ()=>{
    console.log(`server is running on port`, port)
})