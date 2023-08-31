const mongoose = require("mongoose");

const SchemaAbout = mongoose.Schema;
const About = new SchemaAbout(
  {
    title: {
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
    collection: "about",
  }
);
const about = mongoose.model("About", About);
module.exports = about;
