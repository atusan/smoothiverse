const express = require('express');
const router = express.Router();
const ingredientsCtrl = require('../controllers/ingredients');

router.get('/new', ingredientsCtrl.new);
router.post('/', ingredientsCtrl.create);
router.post('/smoothies/:smoothieId/ingredients', ingredientsCtrl.addToItems)



module.exports = router;