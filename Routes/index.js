const router = require('express').Router();

router.use('/api', require('./Posts'));

module.exports = router;

