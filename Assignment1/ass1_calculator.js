let input = ""

// console.log(process.argv[2]);
for(let i=2; i<process.argv.length; i++){
    // console.log(process.argv[i]);
    input+= process.argv[i]+" "
}

calc(input);





function calc(input){

    input = input.trim().split(" ");

    if(input === ""){
        console.log("No Input Provided");
        return;
    }

    let op = input[0];

    if(op === "add"){
        let val1 = parseInt(input[1])
        let val2 = parseInt(input[2])
        console.log(`Result for ${op} ${val1} ${val2} is : `, val1+val2)
    }
    else if(op === "sub"){
        let val1 = parseInt(input[1])
        let val2 = parseInt(input[2])
        console.log(`Result for ${op} ${val1} ${val2} is : `, val1-val2)
    }
    else if(op === "mult"){
        let val1 = parseInt(input[1])
        let val2 = parseInt(input[2])
        console.log(`Result for ${op} ${val1} ${val2} is : `, val1*val2)
    }
    else if(op === "divide"){
        let val1 = parseInt(input[1])
        let val2 = parseInt(input[2])
        console.log(`Result for ${op} ${val1} ${val2} is : `, val1/val2)
    }
    else if(op === "sin"){
        let val1 = parseInt(input[1])
        console.log(`Result for ${op} ${val1} : `, Math.sin(val1))
    }
    else if(op === "cos"){
        let val1 = parseInt(input[1])
        console.log(`Result for ${op} ${val1} : `, Math.cos(val1))
    }
    else if(op === "tan"){
        let val1 = parseInt(input[1])
        console.log(`Result for ${op} ${val1} : `, Math.tan(val1))
    }
    else if(op === "random"){
        const {randomInt} = require('crypto');
        let val = parseInt(input[1]);
        let val1 = randomInt(0,val);
        console.log(val1);
    }
    
}