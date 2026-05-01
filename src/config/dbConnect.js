import mongoose from "mongoose";

async function connectaNaDatabase() {
  mongoose.connect(process.env["DB-CONNECTION-STRING"]);

  return mongoose.connection;
}

export default connectaNaDatabase;
