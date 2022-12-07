const transporter = require("./hostEmail");



const verifyTextRegisterEmail = async({email , verificationToken}) => {

    console.log(email)
    const URL = `http://localhost:3000/api/users/verify/${verificationToken}`;
    
    const emailBody = {
        to: email,
        from: "nodejs@ukr.net",
        subject: "Please verify your email",
        html: `<h1>Please open this link and confirm registration <a href="${URL}">URL</a></h1>`,
    };
    await transporter.sendMail(emailBody);
};




verifyTextRegisterEmail().catch((error) => console.log("app err", error.message));




module.exports = verifyTextRegisterEmail;