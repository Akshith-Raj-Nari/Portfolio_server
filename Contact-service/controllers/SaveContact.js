const ContactModel = require("../models/contactModel").ContactModel;
const sendEmail = require("../utils/sendEmail");

const saveContact = async (req, res) => {
  const { name, email, rating, message } = req.body;

  if (!name || !email || !rating || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Try to save to DB (but don't crash if it fails)
  try {
    const contact = new ContactModel({ name, email, rating, message });
    await contact.save();
    console.log("Saved to DB ✅");
  } catch (error) {
    console.error("DB Error:", error.message);
  }

  // Always try to send the email
  try {
    await sendEmail({ name, email, rating, message });
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email Error:", error.message);
    return res.status(500).json({ error: "Failed to send email" });
  }
};

module.exports = { saveContact };
