const express = require("express")


require("dotenv").config();
require("./db-connect")

const Router =require ("./routes/index")

const app =express()
app.use(express.json());

app.use("/api",Router)

let port = (process.env.PORT)||8000


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

