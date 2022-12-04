const nodemailer = require("nodemailer");
const { SECRET_PASS } = process.env;


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "cd61dcc384c688",
        pass: SECRET_PASS
    }
});


module.exports = transport;