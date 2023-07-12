const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets');


// create a new ticket
router.get('/new', ticketsCtrl.new);



module.exports = router;

