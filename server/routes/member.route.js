const router = require('express');
const memberController = require ('../controllers/member.controllers.js')
const authMemberMiddleware = require('../middleware/auth.middleware.js');
router
.post('/login', memberController.login)
.get('/members', authMemberMiddleware.isAdmin , memberController.getALll)
.get('/member/:id', memberController.getById)
.get('/committee/:committee', memberController.getByCommittee)
.post('/addmember', memberController.AddMember)
.put('/updatemember/:id', memberController.update)
.delete('/deletemember/:id', memberController.deleteMember)

module.exports = router;