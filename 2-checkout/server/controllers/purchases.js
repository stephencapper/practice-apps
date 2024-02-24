const models = require("../models");

exports.post = (req, res) => {
  const user_id = req.session_id;
  const { purchase } = req.body;
  models.purchases.create({user_id, purchase})
  .then(()=>{res.status(201).send()})
  .catch((err)=>{
    console.log('Error adding user data: ', err);
    res.status(400).send(err);
  });
};