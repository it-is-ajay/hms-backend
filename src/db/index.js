import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/hospital-management-system";

const db =  mongoose.connect(url);

export default db;

