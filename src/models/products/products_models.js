const mongoose = require("mongoose");

const SchemaProducts = mongoose.Schema;
const Products = new SchemaProducts(
  {
    name_en: {
      type: String,
      require: true,
      trim: true,
    },
    logo_en: {
      type: String,
    },
    title_en: {
      type: String,
      require: true,
      trim: true,
    },
    name_lo: {
      type: String,
      require: true,
      trim: true,
    },
    logo_lo: {
      type: String,
    },
    title_lo: {
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
