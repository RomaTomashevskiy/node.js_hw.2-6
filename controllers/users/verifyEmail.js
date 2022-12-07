const { User } = require('../../model/users');

const { NotFound } = require('http-errors');



const verifyEmail = async (req, res) => {
    const { verificationToken } = req.params;
    const user = await User.findOne({ verificationToken });

    if (!user) {
        throw new NotFound("Not Found");
    };

    await User.findByIdAndUpdate(user.id, { verify: true, verificationToken: null });
    
    return  res.status(200).json({
        message: "Verification successful"
    });  
};


module.exports = verifyEmail;


