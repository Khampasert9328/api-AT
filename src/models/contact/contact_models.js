const mongoose = require("mongoose");

const SchemaContact = mongoose.Schema;
const Contact = new SchemaContact(
  {
    tell: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
    },
    facebook: {
      type: String,
      require: true,
      trim: true,
    },
    location: {
      type: String,
      require: true,
      trim: true,
    },
    logo: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: "contact",
  }
);
const contact = mongoose.model("Contact", Contact);
module.exports = contact;
