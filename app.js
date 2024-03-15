const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "vaishakhtv@outlook.com",
    pass: "Nodemailer@2341",
  },
});

async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Vaishakh" <vaishakhtv@outlook.com>', // sender address
    to: "Vaistv.vp@gmail.com", // list of receivers
    subject: "Nodemailer test", // Subject line
    text: "This is a Test email", // plain text body
    html: "", // html body
  });

    console.log("Email sent");
}

main().catch(console.error);