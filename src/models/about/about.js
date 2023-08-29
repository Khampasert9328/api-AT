const mongoose = require("mongoose");

const SchemaAbout = mongoose.Schema;
const About = new SchemaAbout(
  {
    logo: {
      type: String,
    },
    title: {
      type: String,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: "about",
  }
);
const about = mongoose.model("About", About);
module.exports = about;
