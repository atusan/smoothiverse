const express = require('express');
const router = express.Router();
const filterTypesCtrl = require('../controllers/filterTypes');

router.post('/', filterTypesCtrl.index);

module.exports = router;