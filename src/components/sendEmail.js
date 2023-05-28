const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "your-email-service-provider", // e.g., 'gmail'
  auth: {
    user: "malhotrazmr@gmail.com",
    pass: "buyovzumylgnpbnr",
  },
});
const sendEmail = async (email, message) => {
  try {
    const mailOptions = {
      from: "your-email@gmail.com",
      to: email,
      subject: "Order Confirmation",
      text: message,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
module.exports = sendEmail;
