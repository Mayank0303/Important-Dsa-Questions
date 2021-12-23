function countChar(str){
  var i = 0;
  var result = "";

  while(i < str.length){
    var count = 0;
    j = i;

    for(var j = i ; j < str.length ; j++){
      if(str[i] != str[j]){
        break;
      }else{
        count++;
      }
    }
    result += str[i]+count;
    i = j;
  }
  console.log(result);
}


function runProgram(input) {
 let str = input.trim();
 
 countChar(str);
}

if (process.env.USERNAME === 'sony') {
  runProgram(`aaabbbbcc`);
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