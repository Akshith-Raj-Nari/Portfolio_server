const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async ({ name, email, rating, message }) => {
  const adminMail = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.TO_EMAIL,
    subject: "📬 New Contact Form Submission",
    html: `
      <h3>You got a new message from your portfolio!</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Rating:</strong> ${rating}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };
  const userMail = {
    from: `"Akshith Raj Nari" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "🙏 Thank You for Contacting Me!",
    html: `
      <h2>Hello ${name},</h2>
      <p>Thank you for reaching out through my portfolio website!</p>
      <p>I’ve received your message and will get back to you shortly.</p>
      <br/>
      <p>Best regards,<br/>Akshith Raj Nari</p>
      <hr style="margin: 24px 0;" />
      <p style="font-size: 0.9em; color: #555;">
        📩 This is an automated confirmation. I'll personally reach out to you soon — kindly wait for my reply.
      </p>
    `,
  };
  await transporter.sendMail(adminMail);
  await transporter.sendMail(userMail);
};

module.exports = sendEmail;
