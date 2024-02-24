const models = require("../models");

exports.post = (req, res) => {
  const id = req.session_id;
  console.log(req.body);
  const { name, email, password } = req.body;
  models.users.create({id, name, email, password})
  .then(()=>{res.status(201).send()})
  .catch((err)=>{
    console.log('Error adding user data: ', err);
    res.status(400).send(err);
  });
};