const Mongoose = require("mongoose");
const DB_URL= "mongodb://127.0.0.1:27017/Todo-list";

Mongoose.connect(DB_URL,{useUnifiedTopology : true,useNewUrlParser : true});

const DB = Mongoose.connection;

module.exports = DB;