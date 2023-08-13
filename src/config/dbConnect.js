import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Carlos:271624@cluster0.6abbccf.mongodb.net/Blog-backEnd");
let db = mongoose.connection;

export default db;