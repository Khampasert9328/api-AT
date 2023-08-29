const mongoose = require("mongoose");

const SchemaService = mongoose.Schema;
const Service = new SchemaService(
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
    collection: "service",
  }
);
const service = mongoose.model("Service", Service);
module.exports = service;
