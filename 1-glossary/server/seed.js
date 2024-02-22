const db = require("./db.js");

const seedData = [
  {"word": "banana", "description": "A fruit, normally yellow when ripe, high in potassium, great for breakfast"},
  {"word": "apple", "description": "A fruit, sometimes tasty, but not worth worrying too much about"},
  {"word": "orange", "description": "A fruit, citrus, colored orange (shocker!), delicious when sweet and juicy"},
  {"word": "soursop", "description": "A fruit, spiky peel, tastes a bit like yakult, the monarch of all fruits"}
];

const seed = () => {
  db.Entry.create(seedData)
  .then((response)=>{
    console.log('Data seeded');
  }).catch((error)=>{
    console.log('Data not seeded');
  });
};

module.exports = seed;