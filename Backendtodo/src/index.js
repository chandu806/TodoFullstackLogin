const express = require('express');

const connect = require('./configs/db');
const cors = require("cors")

const todosController = require("./controllers/todos.controller")

const { register, login } = require("./controllers/auth.controller")

const app = express();
app.use(cors())

app.use(express.json());

app.use("/todos",todosController);
app.use("/todos/:id",todosController);

app.post("/register", register);

app.post("/login", login);


app.listen(process.env.PORT || 1932, async () => {
    try{
        await connect();
        console.log('Listening on Port 1932');
    }
    catch(err)
    {
        console.log(err.message);
    }
});