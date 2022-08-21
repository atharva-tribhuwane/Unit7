const fs = require('fs');
const http = require('http');
const path = require('path');
let arr = [];
const server = http.createServer((req, res) => {
    const data = fs.readdirSync(__dirname);
    data.forEach((el)=>{
        res.write(`<a href="${el}">${el}</a> \n`,{encoding:"utf-8"});
    })
    res.end();

});


server.listen(3000);



