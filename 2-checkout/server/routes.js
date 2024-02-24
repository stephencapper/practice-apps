const router = require('express').Router();
const controllers = require('./controllers');

router.post('/users', controllers.users.post);

router.post('/contacts', controllers.contacts.post);

router.post('/cards', controllers.cards.post);

router.post('/purchases', controllers.purchases.post);

module.exports = router;
