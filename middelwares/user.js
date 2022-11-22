const { User } = require("../model/users");
const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env; 

const user = async (req, res, next) => {
    
    const userHeader = req.headers.authorization || "";
    const [bearer, token] = userHeader.split(" ");

    if (bearer === "Bearer" && token) {
            
        try {
            const isValidToken = jwt.verify(token, SECRET_KEY);
            const user = await User.findById(isValidToken._id);
            
            req.user = user;
            if (!user.token) {
                next(new Unauthorized("Not authorized"));
            }
            return next();
        } catch (error) {

            if (error.name === "TokenExpiredError") {
                next(new Unauthorized("Not authorized"));
            };

            if (error.name === "JsonWebTokenError") {
            next(new Unauthorized("Not authorized"))
            };

            throw error;
        };
    };
    return next(new Unauthorized("Not authorized"))
};

module.exports = user;