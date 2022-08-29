const fs = require("fs");
const express = require("express");
const { nextTick } = require("process");
const { stringify } = require("querystring");
const app = express();
const morgan = require("morgan");
app.use(express.json());


app.use(morgan('Method : :method, endpoint : :url,  status: :status, content-length: :res[content-length], Response-Time :response-time ms, Date:date[web] Http version: :http-version'));

app.post('/', (req,res)=>{
    console.log("hello world");
    res.end("ending response");
})
app.listen(3000);

// let temp = JSON.parse(fs.readFileSync('db1.json'));

// console.log(temp);