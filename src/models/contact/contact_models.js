const mongoose = require("mongoose");

const SchemaContact = mongoose.Schema;
const Contact = new SchemaContact(
  {
    tell_en: {
      type: String,
      require: true,
      trim: true,
    },
    email_en: {
      type: String,
      require: true,
      trim: true,
    },
    facebook_en: {
      type: String,
      require: true,
      trim: true,
    },
    location_en: {
      type: String,
      require: true,
      trim: true,
    },
    logo_en: {
      type: String,
    },

    tell_lo: {
      type: String,
      require: true,
      trim: true,
    },
    email_lo: {
      type: String,
      require: true,
      trim: true,
    },
    facebook_lo: {
      type: String,
      require: true,
      trim: true,
    },
    location_lo: {
      type: String,
      require: true,
      trim: true,
    },
    logo_lo: {
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
