const sendInvoiceEmail = require("./sendEmail");

const handler = async (req, res) => {
  try {
    // Retrieve the email and invoice content from the request body
    const { email, invoiceContent } = req.body;

    // Send the invoice email
    await sendInvoiceEmail(email, invoiceContent);

    // Return a success response
    res.status(200).json({ message: "Invoice email sent successfully." });
  } catch (error) {
    console.error("Error sending invoice email: ", error);
    // Return an error response
    res.status(500).json({ message: "Failed to send invoice email." });
  }
};

export default handler;
