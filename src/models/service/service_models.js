const mongoose = require("mongoose");

const SchemaService = mongoose.Schema;
const Service = new SchemaService(
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
    collection: "service",
  }
);
const service = mongoose.model("Service", Service);
module.exports = service;
