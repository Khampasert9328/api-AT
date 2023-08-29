const mongoose = require("mongoose");

const SchemaTeams = mongoose.Schema;
const Teams = new SchemaTeams(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    surname: {
        type: String,
        require: true,
        trim: true,
    },
    position: {
      type: String,
      require: true,
      trim: true,
    },
    logo:{
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
