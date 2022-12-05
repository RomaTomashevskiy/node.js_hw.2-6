const { User } = require('../../model/users');

const { BadRequest } = require('http-errors');

const verifyTextRegisterEmail = require("../../helpers/textEmail");

const reverify = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  const { verificationToken } = user;
  // console.log(user.verificationToken)
  if (!user.verify) {
    await verifyTextRegisterEmail({ email, verificationToken });
     res.json({ message: "Verification email sent" });
  };


  if (!email) {
    throw new BadRequest("Missing required field email");
  };
  

  if (user.verify) {
    throw new BadRequest("Verification has already been passed");
  };

  
};









module.exports = reverify;