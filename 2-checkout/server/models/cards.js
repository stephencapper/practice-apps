const db = require('../db.js');

exports.create = (card) => {
  //add contact to database
  let { user_id, card_num, exp_date, CVV, bill_zip } = card;
  let createUserQuery = 'INSERT INTO cards (user_id, card_num, exp_date, CVV, bill_zip) VALUES (?, ?, ?, ?, ?)';
  //return promise which will provide database response or error
  return db.queryAsync(createUserQuery, [user_id, card_num, exp_date, CVV, bill_zip]);
};