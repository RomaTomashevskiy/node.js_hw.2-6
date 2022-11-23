const express = require("express");

const router = express.Router();
const { users: ctrl } = require('../../controllers/index');
const { ctrlWrapper , user} = require('../../middelwares');
const {joiSchemaRegister , joiSchemaLogin} = require("../../model/users");

const  validation  = require("../../middelwares/validation");

router.post('/register', validation(joiSchemaRegister), ctrlWrapper(ctrl.register));

router.post('/login', validation(joiSchemaLogin), ctrlWrapper(ctrl.login));

router.get('/logout', ctrlWrapper(user),  ctrlWrapper(ctrl.logout));

router.get('/current', ctrlWrapper(user), ctrlWrapper(ctrl.getCurrent));





module.exports = router;
