let res1 = [];
let res2 = [];
function MinMax(arr,n){

    let res = [];

    let newArr = arr.sort((a,b) => (a-b));

    for(let i = 0 ; i < n ; i++){
        if(newArr[i] != newArr[i+1]){
            res.push(newArr[i]);
        }
    }
    
    for(let j = 0 ; j < res.length/2; j++){
      res1.push(res[j]);
    }
    for(let k = res.length/2 ; k < res.length ; k++){
      res2.push(res[k]);
    }
  
}


function runProgram(input) {
 let data = input.trim().split("\n");

 let n = +data[0].trim();

 let arr = data[1].trim().split(" ").map(Number);

 MinMax(arr,n);

 console.log(res1.join(" "));
 console.log(res2.join(" "));
}

if (process.env.USERNAME === 'sony') {
  runProgram(`8
  1 2 3 4 2 1 6 5`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  }); 
}