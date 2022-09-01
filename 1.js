const fs = require("fs");

const file = fs.writeFile("./test.txt","MassaiSchool",function(err){
    if(err) throw err;
});

fs.appendFile("./test.txt","hello",function(err){
    if(err) throw err;
})

fs.appendFile("./text.txt"," data",function(err){
    if(err) throw err;
})

fs.rename("./text.txt","ttt.txt",function(err){
    if(err) throw err;
})

fs.unlink("./test.txt",function(err){
    if(err) throw err;
})
console.log(file);