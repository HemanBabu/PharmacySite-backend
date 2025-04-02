const mongoose = require("mongoose");

let isConnected = false;

async function connectDB(){
  if(!isConnected){
    const DB_URI = "mongodb+srv://"+process.env.DB_CREDS+"@cluster0.paepdlt.mongodb.net/pharmacysite?retryWrites=true&w=majority&appName=Cluster0"
    try{
      await mongoose.connect(DB_URI)
      isConnected=true;
      return true;
    } catch(e){
      throw e;
    }
  }
  return true;
}

module.exports = connectDB;
