const mongoose = require("mongoose");
const url = process.env.MONGOOSEDB
const connectionDB = async (req, res) => {
  try {
   await mongoose.connect('mongodb+srv://Xaiy:xaiy95494979@cluster0.xtjksku.mongodb.net/api_AT?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("connect success");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectionDB;
