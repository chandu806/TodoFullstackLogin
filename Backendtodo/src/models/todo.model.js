const mongoose = require("mongoose")

const todoSchema= new mongoose.Schema({
    taskName:{type:String ,require:true },
    todosName:{type:String ,require:true },
    status:{type:Number,require:true},
    tag:{type:String , require:true}
   
},{
    versionKey:false,
    timestamps:true
});
              

const Todo=mongoose.model("todo",todoSchema);
module.exports= Todo;