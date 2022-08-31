let arguments = process.argv.slice(2);

const fs = require("fs");
const data = "-A Transformation in Education."

// read
const file = fs.readFileSync("./test.txt",{encoding:"utf-8"});
// append
 fs.appendFileSync("./test.txt",data, "utf8");
//  delete
 fs.unlink("./test.txt",function(err){
     console.log(err)
 });
//  create new file
 fs.writeFile("./test.txt", function(err){
    console.log("err")
 })
// rename file
fs.rename("./new.txt","./test.txt",{encoding:"utf-8"})

console.log(file);
