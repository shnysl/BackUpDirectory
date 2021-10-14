var express = require('express');

var router = express.Router();

var ctrlAdDetail = require('../controller/adDetailController');

router.get('/', ctrlAdDetail.index);
router.get('/:id', ctrlAdDetail.index);

module.exports = router;