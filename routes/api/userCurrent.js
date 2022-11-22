const express = require("express");

const router = express.Router();
const { users: ctrl } = require('../../controllers/index');
const { user, ctrlWrapper } = require('../../middelwares');


router.get('/current', ctrlWrapper(user), ctrlWrapper(ctrl.getCurrent));



module.exports = router;
