
const express = require('express');
const router = express.Router();
const catsCtrl = require('../controllers/cats');

// our routes related to our cat requests go here
// these paths are all prefixed with /cats
router.get('/', catsCtrl.getCats);
router.get('/:id', catsCtrl.show);


module.exports = router;