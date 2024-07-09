const express = require('express'),
      router = express.Router(),
      { createUser,loginUser } = require('../controllers/authController')


router.route('/register').post(createUser);
router.route('/login').post(loginUser);



module.exports = router