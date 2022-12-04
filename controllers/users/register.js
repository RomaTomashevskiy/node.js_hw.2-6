const { User } = require('../../model/users');
const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const { v4: uuidv4 } = require('uuid');
const verufyTextRegisterEmail = require("../../helpers/textEmail");

const register = async (req, res) => {

    const {email, password, subscription } = req.body;
    const user = await User.findOne({ email });
    const avatarURL = gravatar.url(email);
    
    const verificationToken = uuidv4();

     
    if (user) {
        throw new Conflict(409, "Email in use");
    }
    const result = await User.create({
        email,
        password,
        subscription,
        avatarURL,
        verificationToken
    });

    await verufyTextRegisterEmail({ email, verificationToken });
    
    res.status(201).json({
        email: result.email,
        subscription: result.subscription,
        avatarURL,
        verificationToken
    });
};

module.exports = register;