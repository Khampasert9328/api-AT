const mongoose = require("mongoose");

const SchemaTeams = mongoose.Schema;
const Teams = new SchemaTeams(
  {
    name_en: {
      type: String,
      require: true,
      trim: true,
    },
    surname_en: {
        type: String,
        require: true,
        trim: true,
    },
    position_en: {
      type: String,
      require: true,
      trim: true,
    },
    logo_en:{
        type: String,
    },


    name_lo: {
      type: String,
      require: true,
      trim: true,
    },
    surname_lo: {
        type: String,
        require: true,
        trim: true,
    },
    position_lo: {
      type: String,
      require: true,
      trim: true,
    },
    logo_lo:{
        type: String,
    }
  },
  {
    timestamps: true,
    collection: "teams",
  }
);
const teams = mongoose.model("Teams", Teams);
module.exports = teams;
