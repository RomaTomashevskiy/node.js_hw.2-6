const register = require("./register");
const login = require("./login");
const getCurrent = require('./getCurrent');
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const reverify = require("./reverify");


module.exports = {
    register,
    login,
    getCurrent,
    logout,
    updateAvatar,
    verifyEmail,
    reverify
};