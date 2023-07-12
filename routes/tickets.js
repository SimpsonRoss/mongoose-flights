const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets');


// create a new flight
router.get('/new', ticketsCtrl.new);

// save a new flight
//router.post('/', ticketCtrl.create);

module.exports = router;