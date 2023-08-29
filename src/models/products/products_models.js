const mongoose = require("mongoose");

const SchemaProducts = mongoose.Schema;
const Products = new SchemaProducts(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
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
    collection: "products",
  }
);
const products = mongoose.model("Products", Products);
module.exports = products;
