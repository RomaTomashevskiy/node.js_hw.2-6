const { User } = require('../../model/users');
const bcrypt = require("bcrypt");
const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;


const login = async (req, res) => {

    const { email , password} = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw new Unauthorized("Email or password is wrong");
    };

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

      if (!isPasswordCorrect) {
          throw new Unauthorized("Password is wrong");
    };

    const token = jwt.sign({_id: user.id } , SECRET_KEY , {expiresIn:"30m"});
    user.token = token;
    
    await User.findByIdAndUpdate(user._id, user);
    return res.status(200).json({
        code: 200,
        result: {
            token
        }
    });
};

module.exports = login;