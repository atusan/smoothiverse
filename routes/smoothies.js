const express = require('express');
const router = express.Router();
const smoothiesCtrl = require('../controllers/smoothies');

router.get('/', smoothiesCtrl.index);
router.get('/new', smoothiesCtrl.new);
router.get('/:id', smoothiesCtrl.show);
router.post('/', smoothiesCtrl.create);
router.get('/:id/edit', smoothiesCtrl.edit);
router.put('/:id',smoothiesCtrl.update);

module.exports = router;