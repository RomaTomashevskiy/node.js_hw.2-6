const { User } = require('../../model/users');
const { Conflict } = require("http-errors");


const register = async (req, res, next) => {
    const { email, password } = req.body;
    const user = new User({ email, password });
 
    try {
        await user.save();
        return res.status(201).json({
            code: 201,
            data: {
                id: user.id,
                email
            }
        });
    } catch (error) {
        if (error) {
            throw new Conflict("Email in use");
        };
        throw error;
    };
};

module.exports = register;