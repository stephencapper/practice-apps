const models = require("../models");

exports.post = (req, res) => {
  const user_id = req.session_id;
  const { card_num, exp_date, CVV, bill_zip } = req.body;
  models.cards.create({user_id, card_num, exp_date, CVV, bill_zip})
  .then(()=>{res.status(201).send()})
  .catch((err)=>{
    console.log('Error adding user data: ', err);
    res.status(400).send(err);
  });
};