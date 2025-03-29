const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const TodoTask = require("./models/TodoTask");


dotenv.config();

// Serve static files
app.use("/static", express.static("public"));

// Parse form data
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.DB_CONNECT)
.then(() => {
    console.log("Connected to db!");
    app.listen(3000, () => console.log("Server Up and running"));
})
.catch((err) => { console.error(err); });

// Use EJS template engine
app.set("view engine", "ejs");

// GET route - show the form
app.get('/', (req, res) => {
  res.render('todo.ejs');
});

// POST route - handle form submission
app.post('/', async (req, res) => {
    const todoTask = new TodoTask({
      content: req.body.content
    });
  
    try {
      await todoTask.save(); // save to MongoDB
      res.redirect('/');
    } catch (err) {
      res.status(500).send("Internal Server Error");
    }
  });
  

// Start the server
//app.listen(3000, () => {
  //console.log('server is up and running');
//});
