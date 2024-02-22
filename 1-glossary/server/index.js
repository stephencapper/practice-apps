require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./db.js");

const app = express();

// Serves up all static and generated assets in in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.json());

/****
 *
 *
 * Other routes here....
 *
 *
 *
 */

app.get('/entries', (req, res) => {
  //make call on database
  db.Entry.find().sort('word').exec()
  .then((entries) => {
    res.status(200).send(JSON.stringify(entries));
  }).catch((error) => {
    res.status(500).send('Error retrieving entries from database' + error.message)
  })
});

app.post('/entries', (req, res) => {
  //TODO
  const entry = req.body;
  console.log(entry);
  //make call on database
  db.Entry.create(entry)
  .then(()=>{
    res.status(201).send();
    console.log('Entry added to db successfully')
  }).catch((error) => {
    res.status(400).send('Error adding entry to database: ' + error.message);
    console.log('Error adding entry to database: ', error.message);
  })
});

app.put('/entries/:_id', (req, res) => {
  //retrieve entry from req
  const entry = req.body;
  const _id = req.params._id;

  //make call on database to update entry
  db.Entry.updateOne({ _id }, entry).exec()
  .then((returnedObject)=>{
    res.status(204).send();
    console.log('Entry updated in db successfully: ', returnedObject);
  }).catch((error) => {
    res.status(400).send('Error updating entry in database: ' + error.message);
    console.log('Error updating entry in database: ', error.message);
  })
});

app.delete('/entries/:_id', (req, res) => {
    //retrieve entry from req
    const _id = req.params._id;
    //make call on database to update entry
    db.Entry.deleteOne({ _id }).exec()
    .then(()=>{
      res.status(204).send();
      console.log('Entry deleted in db successfully')
    }).catch((error) => {
      res.status(400).send('Error deleting entry in database: ' + error.message);
      console.log('Error deleting entry in database: ', error.message);
    })
});










app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
