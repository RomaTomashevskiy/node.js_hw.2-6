const express = require("express");

const router = express.Router();
const { users: ctrl } = require('../../controllers/index');
const { ctrlWrapper , user , upload} = require('../../middelwares');

const {joiSchemaRegister , joiSchemaLogin , joiSchemaEmailVerify} = require("../../model/users");


const validation = require("../../middelwares/validation");

router.post('/register', validation(joiSchemaRegister), ctrlWrapper(ctrl.register));

router.post('/login', validation(joiSchemaLogin), ctrlWrapper(ctrl.login));

router.get('/logout', ctrlWrapper(user),  ctrlWrapper(ctrl.logout));

router.get('/current', ctrlWrapper(user), ctrlWrapper(ctrl.getCurrent));

router.patch('/avatars', ctrlWrapper(user), upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar));

router.get('/verify/:verificationToken', ctrlWrapper(ctrl.verifyEmail));

router.post('/verify', validation(joiSchemaEmailVerify) ,  ctrlWrapper(ctrl.reverify));





module.exports = router;
