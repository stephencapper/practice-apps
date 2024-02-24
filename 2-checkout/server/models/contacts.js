const db = require('../db.js');

exports.create = (contact) => {
  //add contact to database
  let { user_id, line_1, line_2, city, state, zip, phone } = contact;
  let createContactQuery = 'INSERT INTO contacts (user_id, line_1, line_2, city, state, zip, phone) VALUES (?, ?, ?, ?, ?, ?, ?)';
  //return promise which will provide database response or error
  return db.queryAsync(createContactQuery, [user_id, line_1, line_2, city, state, zip, phone]);
};