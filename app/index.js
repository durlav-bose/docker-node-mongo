const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config()
const port = process.env.PORT || 3005
const userModel = require("./models/user");
// const Router = require("./routes")

const app = express();


console.log(process.env.MONGO_DB_HOST);
console.log(process.env.MONGO_DB_PORT);
console.log(process.env.MONGO_DB_DATABASE);
let uri = `mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_DATABASE}`;
// let uri = "mongodb://localhost:27017"

mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then((response) => {
    console.log("response: connected", response);
}).catch((err) => {
    console.log("error---------", err);
});

app.get('/', async (req, res) => {
  await userModel.create({
    name: "Durlav",
    age: 27
  }).then((response) => {
    console.log("response.......",response);
    res.send({
      response: response
    })
  }).catch(err => {
    console.log("error", err);
  });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
