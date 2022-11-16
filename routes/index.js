const router = require('express').Router();

router.use('/api', require('./stocks'));

module.exports = router;
