const router = require('express').Router()
const {login, refresh, register} = require('../Controllers/authController');

router.post('/login', login);
router.post('/register',register);
router.post('/refresh', refresh);


module.exports = router;