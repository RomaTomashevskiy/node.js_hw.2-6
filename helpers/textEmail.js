const transport = require("./hostEmail");



const verufyTextRegisterEmail = async ({email , verificationToken}) => {


    const URL = `http://localhost:3000/api/users/verify/${verificationToken}`;
    
    const emailBody = {
        form: "nodejs@ukr.net",
        to: email,
        subject: "Please verify your email",
        html: `<h1>Please open this link and confirm registration <a href="${URL}">URL</a></h1>`,
    };

    await transport.sendMail(emailBody);
};


verufyTextRegisterEmail().catch((error) => console.log("app err", error.message));




module.exports = verufyTextRegisterEmail;