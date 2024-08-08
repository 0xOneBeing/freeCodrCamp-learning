// Require express
const express = require("express");

// Require ejs
const ejs = require("ejs");

// Require mongoose
const mongoose = require("mongoose");

// Require Events model
const Event = require("./models/event");

const dbURL = `mongodb+srv://0xonebeing:Web@12345!@event-app.spafgak.mongodb.net/`;

mongoose
  .connect(process.env.dbURL)
  .then((result) => {
    console.log("Connected to MongoDB", result);
    app.listen(3000, () => {
      console.log("Server stated in port 3000");
    });
  })
  .catch((err) => {
    console.log("Could not connect to MongoDB:", err);
  });

// Consstruct app as an instance of
const app = express();

// Set ejs
app.set("View engine", "ejs");

// Route path
app.get("/", (res, req) => {
  res.send("Hello World!");
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

// posting a data
app.post("/submit-event", (req, res) => {
  const event = new Event(req.body);
  event
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.error(err);
    });
});

// To get all the event

router.get("/", (req, res) => {
  Event.find()
    .then((result) => {
      res.render("index", { title: "All event", events: result });
    })
    .catch((err) => {
      console.error(err);
    });
});
