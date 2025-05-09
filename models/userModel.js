const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user : {type : String, required : true, unique : true},
    password : {type : String, required : true}
});

module.exports = new mongoose.model("user", userSchema);