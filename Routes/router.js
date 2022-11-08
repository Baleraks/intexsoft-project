const router = require('express').Router()
const authRouts = require('./authRouts')

router.use('/auth', authRouts);
module.exports = router;