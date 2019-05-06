const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth.middleware')
const authController = require('../controllers/auth.controller')
const userController = require('../controllers/user.controller')

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)
router.get('/auth/logout', authController.logout)
router.get('/me', authMiddleware.checkAuth, userController.self)

module.exports = router
