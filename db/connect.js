const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://gerwyn:1234@next-store.m1pf79i.mongodb.net/";

const connectDB = async (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
