const express = require('express');
const router = express.Router();
const memberController = require ('../controllers/member.controllers.js')
const authMemberMiddleware = require('../middleware/auth.middleware.js');
const authController = require('../controllers/auth.controllers.js');
// router
// .post('/login', memberController.login)
// .get('/members', authMemberMiddleware.isAdmin , memberController.getALll)
// .get('/member/:id', memberController.getById)
// .get('/committee/:committee', memberController.getByCommittee)
// .post('/addmember', memberController.AddMember)
// .put('/updatemember/:id', memberController.update)
// .delete('/deletemember/:id', memberController.deleteMember)

router
.post('/login', authController.login)
.get('/My-Score',authMemberMiddleware.verifyToken, authMemberMiddleware.checkRole('member'),memberController.getMyScore)
.get('/Committee-Scoreboard',authMemberMiddleware.verifyToken, authMemberMiddleware.checkRole('member'), memberController.getCommitteeScoreboard)
module.exports = router;