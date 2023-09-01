const mongoose = require("mongoose");

const Schemahome = mongoose.Schema;
const Home = new Schemahome(
  {
    name_en: {
      type: String,
      trim: true,
    },
    logo_en: {
      type: String,
    },
    image_en: {
      type: String,
    },
    name_lo: {
      type: String,
      trim: true,
    },
    logo_lo: {
      type: String,
    },
    image_lo: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: "home",
  }
);
const home = mongoose.model("Home", Home);
module.exports = home;
