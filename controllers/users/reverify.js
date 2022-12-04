const { User } = require('../../model/users');

const { BadRequest } = require('http-errors');

const verufyTextRegisterEmail = require("../../helpers/textEmail");

const reverify = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!email) {
    throw new BadRequest("Missing required field email");
  };
  

  if (user.verify) {
    throw new BadRequest("Verification has already been passed");
  };

  
  if (!user.verify) {
    await verufyTextRegisterEmail(email, user.verificationToken);
    
    return res.json({ message: "Verification email sent" });
  };
  
};









module.exports = reverify;