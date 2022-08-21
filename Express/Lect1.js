const express = require('express');
const fs = require('fs');
const app = express();
let todos = [
    {
        todos:"Go to walk",
        isCompleted: true,
        date:Date.now()
    },
    {
        todos:"Eat Food",
        isCompleted: false,
        date:Date.now()
    }
];
 
app.use(express.json());
app.get('/todos',(req,res)=>{

    return res.send({todos});
    // res.end();
})

app.post('/todos',(req,res)=>{
    let {task} = req.body;
    let todo={
        task,
        isCompleted:false,
        date:Date.now()
    }
    todos.push(todo);
    return res.send("Data posted successfully");
})

app.listen('3000',()=>{
    console.log("server started");
})