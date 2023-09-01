const mongoose = require("mongoose");

const SchemaAbout = mongoose.Schema;
const About = new SchemaAbout(
  {
    title_en: {
      type: String,
      require: true,
      trim: true,
    },
    logo_en: {
      type: String,
    },
    title_lo: {
      type: String,
      trim: true,
    },
    logo_lo: {
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
