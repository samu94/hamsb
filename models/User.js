const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema the same

const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema);
