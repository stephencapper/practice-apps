const db = require('../db.js');

exports.create = (purchaseObj) => {
  //add contact to database
  let { user_id, purchase } = purchaseObj;
  let createUserQuery = 'INSERT INTO purchases (user_id, purchase) VALUES (?, ?)';
  //return promise which will provide database response or error
  return db.queryAsync(createUserQuery, [user_id, purchase]);
};