const fs = require("fs");
const express = require("express");
const { nextTick } = require("process");
const { stringify } = require("querystring");
const app = express();
app.use(express.json());

// function payloadValidator(req, res, next){
//     const temp = req.body;
//     // temp = JSON.parse(typeof temp.Cast)
//     console.log(typeof temp.id);
//     if(typeof temp.id!== "number" || typeof temp.Name!== "string" || typeof temp.Description!== "string" || typeof temp.Genre!== "string" || typeof temp.Rating!== "number"){
//         res.status(400).send("Something is wrong!!! please check type of calues you're providing to kkey");
//     }
//     next();
//     // res.end();
    
// }
// app.use(payloadValidator);

// app.post('/', (req,res)=>{
//     console.log("still working")
//     let temp = JSON.parse(fs.readFileSync('db.json'));
//      temp.movies.push(req.body);
//      temp = JSON.stringify(temp,null,2);
//     fs.writeFileSync('db.json', temp);
//     res.end("Data Posted Successfully");
// })
// app.listen(3000);

let temp = JSON.parse(fs.readFileSync('db1.json'));

console.log(temp);