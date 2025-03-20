// const http = require('http');

// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end("Hello World");
//         // res.end("Hello From App");
//     }
// })

// server.listen(5000,()=>{
//     console.log("Server is running 'http://localhost:5000'");
// })

const fs = require('fs');

// Write File
// fs.writeFile("test.txt","Hello This is from node file index.js. This is added context.",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("data is written");
//     }
// });

// Read File
// const data = fs.readFileSync("test.txt",'utf8');
// console.log(data);

// fs.readFile("test.txt",'utf8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });

// delete file
// fs.unlink("test.txt",(err)=>{
//     console.log("File deleted");
// })

fs.readdir('./folder/mi',(err,file)=>{
    file.forEach(el => console.log(el))
    console.log(file);
    
})



