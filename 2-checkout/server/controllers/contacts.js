const models = require("../models");

exports.post = (req, res) => {
  const user_id = req.session_id;
  const { line_1, line_2, city, state, zip, phone } = req.body;
  models.contacts.create({user_id, line_1, line_2, city, state, zip, phone})
  .then(()=>{res.status(201).send()})
  .catch((err)=>{
    console.log('Error adding user data: ', err);
    res.status(400).send(err);
  });
};