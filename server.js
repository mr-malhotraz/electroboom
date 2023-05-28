const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  try {
    const { email, cartItems } = req.body;

    // Calculate order summary
    let total = 0;
    let quantity = 0;

    const itemsList = cartItems
      .map((item) => {
        total += item.price * item.quantity;
        quantity += item.quantity;

        return `<li>${item.title} - Quantity: ${item.quantity}</li>`;
      })
      .join("");

    const orderSummary = `
    <h2 style="color: #333;">Order Details:</h2>
    <p style="color: #333;">Items:</p>
    <ul>
      ${itemsList}
    </ul>
    <p style="color: #333;">Total Price: ₹ ${total + 60} (Shipping included)</p>
    `;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Provide your email service credentials or use a third-party SMTP service
      service: "Gmail",
      auth: {
        user: "malhotrazmr@gmail.com",
        pass: "mcahzenfhizfgjmv",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: "malhotrazmr@gmail.com", // Replace with your email address
      to: email,
      subject: "Order Confirmation",
      html: `
      <div style="background-color: #f2f2f2; padding: 20px;">
  <h1 style="color: #333; text-align: center;">Thank you for your order!</h1>
  <div style="background-color: #fff; padding: 20px; border-radius: 5px;"> ${orderSummary} 
  </div>
  
  <div style= " display:flex; justify-content:center ; align-items:center " >
 <div> <img  src="https://styles.redditmedia.com/t5_3a9zj/styles/communityIcon_am83r8jmc5151.png" alt="Logo" style=" padding: 20px  ;  height:40px; width:40px"></div> 
 <div>  ElectroBoom LLC. © 2023 <br> <i> An E-commerce Project By- </i> <a href="#"> <br> Shashank Malhotra </a> </div> </div>
  
  
</div>
        `,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
