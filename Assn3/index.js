//No frontend test the requests on postman/thunderclient


const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send(JSON.parse(fs.readFileSync('db.json')));
    res.end();
})
app.post('/', (req, res) => {
    console.log(req.body);
    let temp = JSON.parse(fs.readFileSync('db.json'));
     temp.users.push(req.body);
     temp = JSON.stringify(temp,null,2);
    fs.writeFileSync('db.json', temp);
    res.end("Data Posted Successfully");
})

app.put('/:id', (req,res)=>{
    let temp = JSON.parse(fs.readFileSync('db.json'));
    let id = req.params.id;
    let payload = req.body;
    payload['id'] = req.params.id;
    temp.users[id-1] = payload;
    fs.writeFileSync('db.json', JSON.stringify(temp));
    res.end("done");

})

app.patch('/:id', (req,res)=>{
    let temp = JSON.parse(fs.readFileSync('db.json'));
    let id = req.params.id;
    let tp = temp.users[id-1];
    // console.log(req.body);
    
    for(key in req.body){
        if(tp[key] === undefined){
            tp[key] = req.body[key];
        }
        else{
            if(tp[key] !== req.body[key]){
                tp[key] = req.body[key];
            }
        }
    }

    // console.log(temp);
    fs.writeFileSync('db.json', JSON.stringify(temp));
    res.end("done patching");
})
app.listen(3000);