const nodemailer = require("nodemailer");

// Define your SMTP transporter
const transporter = nodemailer.createTransport({
  // Provide your SMTP configuration here
  host: "your-smtp-host",
  port: 587,
  secure: false, // Set to true if your SMTP server requires a secure connection
  auth: {
    user: "your-smtp-username",
    pass: "your-smtp-password",
  },
});

// Define your email sending function
const sendInvoiceEmail = async (toEmail, invoiceContent) => {
  try {
    // Compose the email
    const mailOptions = {
      from: "your-email@example.com",
      to: toEmail,
      subject: "Invoice",
      html: `<html><body>${invoiceContent}</body></html>`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.messageId);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

// Export the function for usage in your API endpoint
module.exports = sendInvoiceEmail;
