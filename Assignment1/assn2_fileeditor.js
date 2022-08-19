const fs = require('fs');

let input = "";

for(let i=2; i<process.argv.length; i++){
    input+= process.argv[i]+" ";
}

func(input);

function func(input){
    input = input.trim().split(" ");
    let op = input[0];
    let filename = input[1];

    if(op === "read"){
        const read = fs.readFileSync(`${filename}`, {encoding:"utf-8"});
        console.log("\n"+read+"\n");
    }
    else if(op === "append"){
        filename = input[input.length-1];
        let content = input.slice(1,input.length-1).join(" "); //this will slice our content from entire input and will join it
        // console.log(content);
        fs.appendFileSync(`${filename}`, `${content}` );
        console.log("Content Added Successfully!!!");
    }
    else if(op === "create"){
            fs.writeFile(`${input[1]}`, "this is new file", (err)=>{
                if(err){
                    console.log(error)
                    return;
                }
                console.log("Created successfully!!!")
            });
        
    }

   else if(op === "rename"){
        fs.rename(`${input[1]}`,`${input[2]}`,(error)=>{
            if(error){
                throw error
            }
            console.log("Name changed successfully!!!")
        })
   }
   else if(op === "delete"){
        fs.unlink('hello1.txt',(error)=>{
            if(error){
                throw error
            }
            console.log("File removed  successfully!!!")
        })
   }
} 


// input = input.trim().split(" ");
// let content = input.slice(1, input.length-1);
// console.log(content);