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
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB.");
  }
);

app.get("/", (req, res) => {
  // let user = new User({
  //   name: "Gopal Prasad Pokharel",
  //   email: "headmaster@amarmavi.com",
  //   password: "Software123!@#",
  // });
  // //Saving the new USER
  // user
  //   .save()
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
  res.status(200).render("index");
});

app.get("/get", (req, res) => {
  User.find()
    .then((data) => {
      data.forEach((user) => {
        User.findByIdAndDelete(`${user._id}`)
          .then((message) => {
            console.log(`User " ${user.name} " deleted successfully`);
          })
          .catch((e) => {
            console.log(`Unable to delete user :" ${user.name} "`);
          });
      });
      res.status(201).json(data);
    })
    .catch((e) => {
      console.log(e);
    });
});
app.get("/show", (req, res) => {
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

app.listen(3000, () => console.log("Server is UP."));
