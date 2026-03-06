const router = require('express');
const { getALll } = require('../controllers/head.controllers.js');

router.get('/head', getALll);
module.exports = router;