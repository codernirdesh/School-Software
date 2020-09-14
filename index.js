const express = require("express");
const mongoose = require("mongoose");
const { render } = require("ejs");
require("dotenv/config");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
// //Import Route
// const authRoute = require("./router/auth");
const pageRoute = require("./routes/page");

//MODEL
const User = require("./model/User");
mongoose.connect(
  process.env.DB_CONNECTION_ONLINE,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB.");
  }
);

app.get("/", (req, res) => {
  res.status(200).render("index");
});

app.get("/deleteAll", (req, res) => {
  User.find()
    .then((data) => {
      data.forEach((user) => {
        User.findByIdAndDelete(`${user._id}`)
          .then(() => {
            console.log(`User " ${user.name} " deleted successfully`);
          })
          .catch(() => {
            console.log(`Unable to delete user :" ${user.name} "`);
          });
      });
      res.status(201).json(data);
    })
    .catch((e) => {
      console.log(e);
    });
});
app.get("/getAll", (req, res) => {
  User.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      console.log(e);
    });
});
// //Middlewares
// // app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
//Route Middleware
// app.use("/", authRoute);
app.use("/page", pageRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server is UP."));
