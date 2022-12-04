// const nodemailer = require("nodemailer");
// require("dotenv").config();

// async function main() {
//     const transport = nodemailer.createTransport({
//         host: "smtp.mailtrap.io",
//         port: 2525,
//         auth: {
//             user: "cd61dcc384c688",
//             pass: "a643483be3a9dd"
//         }
//     });

//     const email = {
//         form: "romatomashevskiy@ukr.net",
//         to: "romatomashevskiy@ukr.net",
//         subject: "Hello ",
//         html: "<h1>Hello It is Roma</h1>",
//         text: "Hello It is Roma"
//     };

//    const res = await transport.sendMail(email);
//     console.log("Email send" , res);
// };

// main().catch((err) => console.log("app err", err));











// const password = "password";



// const nodemailerConfig = {
//     host: "sntm.meta.ua",
//     pors: 465,
//     secure: true,
//     auth: {
//         user: "romantomashevskyi@meta.ua",
//         pass:password
//     }
// };

// const transporterEmail = nodemailer.transporter(nodemailerConfig);


// const email = {
//     to: "romatomashevskiy@ukr.net",
//     form: "romatomashevskiy@ukr.net",
//     subject: "Hello ",
//     text: "Hello It is Roma",
// };
    

// transporterEmail.sendMail(email).then(() => {console.log("Email send success")}).catch((error => {
//     console.log(error);
// }));