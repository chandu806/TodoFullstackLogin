const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb+srv://Chandu:chandu806@cluster0.mongodb.net/todos")
}

module.exports = connect;