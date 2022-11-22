const { User } = require('../../model/users');


const logout = async(req, res , next) => {
 
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { token: null });
    
    return res.status(204).json({
        code: 204,
      
    });
};

module.exports = logout;