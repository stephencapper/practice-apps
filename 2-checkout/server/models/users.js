const db = require('../db.js');

exports.create = (user) => {
  //add user to database
  let { id, name, email, password } = user;
  let createUserQuery = 'INSERT INTO users VALUES (?, ?, ?, ?)';
  //return promise which will provide database response or error
  return db.queryAsync(createUserQuery, [id, name, email, password]);
}