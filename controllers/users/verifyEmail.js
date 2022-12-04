const { User } = require('../../model/users');




const verifyEmail = async (req, res, next) => {
    const { verificationToken } = req.params;
    const user = await User.findOne({ verificationToken });

    if (!user) {
        res.status(404).json({
            code: 404,
            message: "Not Found"
        });
    };

    if (!user.verify) {
        await User.findByIdAndUpdate(user.id, { verify: true , verificationToken:null});
        res.status(200).json({
            message: "Verification successful"
        });
    };  
};


module.exports = verifyEmail;


