const express = require('express');
const router = express.Router();
const headController = require('../controllers/head.controllers.js');
const authMemberMiddleware = require('../middleware/auth.middleware.js');
const authController = require('../controllers/auth.controllers.js');

router
.post('/login', authController.login)
.get('/getAll',authMemberMiddleware.verifyToken,authMemberMiddleware.checkRole('head'),headController.getAll)
.get('/getMember/:id',authMemberMiddleware.verifyToken ,authMemberMiddleware.checkRole('head'), headController.getById)
.post('/addMember',authMemberMiddleware.verifyToken, authMemberMiddleware.checkRole('head'), headController.AddMember)
.put('/updateMember/:id',authMemberMiddleware.verifyToken, authMemberMiddleware.checkRole('head'), headController.update)
.delete('/deleteMember/:id',authMemberMiddleware.verifyToken, authMemberMiddleware.checkRole('head'), headController.deleteMember)
;
module.exports = router;