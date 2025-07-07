const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  name: String,
  email: String,
  rating: Number,
  message: String,
});

const ContactModel = mongoose.model("contacts", ContactSchema);

module.exports.ContactModel = ContactModel;
