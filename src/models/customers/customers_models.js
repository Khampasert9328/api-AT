const mongoose = require("mongoose");

const SchemaCustomers = mongoose.Schema;
const Customers = new SchemaCustomers(
  {
    name: {
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
    collection: "customers",
  }
);
const customers = mongoose.model("Customers", Customers);
module.exports = customers;
