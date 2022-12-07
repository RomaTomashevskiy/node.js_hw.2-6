const { User } = require('../../model/users');

const { BadRequest } = require('http-errors');

const verifyTextRegisterEmail = require("../../helpers/textEmail");

const reverify = async(req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  const { verificationToken } = user;

  if (!email) {
    throw new BadRequest("Missing required field email");
  };
  

  if (user.verify) {
    throw new BadRequest("Verification has already been passed");
  };

  await verifyTextRegisterEmail({ email, verificationToken });
  return res.json({ message: "Verification email sent" });
};









module.exports = reverify;