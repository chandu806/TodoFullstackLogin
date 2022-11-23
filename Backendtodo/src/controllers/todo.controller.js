const express = require("express");
const middleware = require("../middlewares/authenticate")
const Todo = require("../models/todos.model");

const route= express();

route.post("",

 async(req,res) =>{

    try {
        const todo = await Todo.create(req.body)
        return res.status(200).send(todo)
    } catch (error) {
        console.log(error)
        return res.status(500).send("error:",error)
    }
})
route.get("",async(req,res)=>{
    try {
        const todo = await Todo.find().lean().exec();
        return res.status(200).send(todo);
    } catch (error) {
        console.log(error);

          return res.status(400).send(error.message);
    }
})

route.get("/:id",async(req,res)=>{
  try {
      const todo =await Todo.findById(req.params.id).lean().exec();
      return res.status(200).send(todo);
  } catch (error) {
      console.log(error);

        return res.status(400).send(error.message);
  }
})

route.patch("/:id",middleware,async(req,res)=>{
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true,}).lean().exec();
        return res.status(201).send(todo);
    }
    catch(e){
        return res.status(500).send(e.message)
    }
})
route.delete("/:id",middleware,async(req,res)=>{
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(todo);
    }
    catch(e){
        return res.status(500).send(e.message)
    }
})

module.exports = route;