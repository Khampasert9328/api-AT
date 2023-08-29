const mongoose = require("mongoose");

const Schemahome = mongoose.Schema;
const Home = new Schemahome(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    logo: {
      type: String,
    },
    image: {
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
