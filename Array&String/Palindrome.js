function palindrome(str,n){

    let res = "";

    for(let i = n-1 ; i >=0 ;i--){
        res = res + str[i];
    }

    if(str === res){
        console.log("Yes");
    }else{
        console.log("No");
    }
}

function runProgram(input) {
 let data = input.trim().split("\n");
 let n = +data[0].trim();

 let str = data[1].trim();

 palindrome(str,n);
}

if (process.env.USERNAME === 'sony') {
  runProgram(`7
  rcixicr`);
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