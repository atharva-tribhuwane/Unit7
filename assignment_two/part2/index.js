const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url === "/textsync"){
        const data = fs.readFileSync('textfile.txt',{encoding:'utf-8'});
        // res.write(`${data}`);
        console.log("done sync")
    }
    else if(req.url === "/textasync"){
        const data = fs.readFile('textfile.txt',(err,data1)=>{
            if(err){
                console.log(error);
            }
            else{
                console.log("done async")
            }
        });
    }
    else if(req.url === "/textstream"){
        const data = fs.ReadStream('textfile.txt',(err,data1)=>{
            if(err){
                console.log(error);
            }
            else{
                console.log("done stream")
            }
        });
    }
    res.end();
})

server.listen(3000);