const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log("Hello");
    if (req.url === '/users') {
        const data = fs.readFileSync('index.html', {encoding:"utf-8"});
        res.write(data);
    }
    else{
        res.write("Loaded serverr successfully!!!")
   }
    res.end();

})

server.listen(3001);



// console.log(data.toString());