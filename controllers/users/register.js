const { User } = require('../../model/users');
const { Conflict } = require("http-errors");
const gravatar = require("gravatar");


const register = async (req, res, next) => {

    const {email, password, subscription } = req.body;
    const user = await User.findOne({ email });
    const avatarURL = gravatar.url(email);
    
    if (user) {
        throw new Conflict(409, "Email in use");
    }
    const result = await User.create({
        email,
        password,
        subscription,
        avatarURL
    });
    res.status(201).json({
        email: result.email,
        subscription: result.subscription,
        avatarURL
    });
};

module.exports = register;