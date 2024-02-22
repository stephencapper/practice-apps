const mongoose = require("mongoose");
const { Schema } = mongoose;

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`);
const db = mongoose.connection;

// 2. Set up any schema and models needed by the app
const entrySchema = new mongoose.Schema({
  word: {
    type: String,
    unique: true
  },
  description: String
});

const Entry = mongoose.model('Entry', entrySchema);

// 3. Export the models

module.exports.Entry = Entry;
// 4. Import the models into any modules that need them
