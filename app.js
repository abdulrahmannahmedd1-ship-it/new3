require('dotenv').config({ path: './sec.env' })

const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = process.env.PORT || 3001
const Student = require("./models/studentschema.js");

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  Student.find()
    .then((result) => {
      console.log("========================");
      console.log(result);
      res.render("index",{arr:result});
    })
    .catch((err) => {
      console.log(err);
    })
})

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
})
.catch((err) => {
  console.log(err);
});

app.get("/views/index.ejs", (req, res) => {
  res.render('new3/index');
});

app.post("/views/index.ejs", (req, res) => {
  console.log(req.body);

  Student.create(req.body)
    .then(() => { res.redirect("/") })
    .catch((err) => {
      console.log(err);
    });
});