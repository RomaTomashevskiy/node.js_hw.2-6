const { User } = require('../../model/users');
const { Conflict } = require("http-errors");


const register = async (req, res, next) => {

    const {email, password, subscription } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw new Conflict(409, "Email in use");
    }

    const result = await User.create({
        email,
        password,
        subscription,
    });
    res.status(201).json({
        email: result.email,
        subscription: result.subscription,
    });
};

module.exports = register;