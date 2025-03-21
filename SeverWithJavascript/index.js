const http = require('http');

const server = http.createServer((req,res)=>{
    // if(req.url === '/'){
    //     console.log("Main Home page with / path");
        
    // }

    if(req.method == 'POST'){
        console.log("This is Post request from the user");
        const data = req.body;
        res.end(data);
    }

    if(req.method == 'GET'){
        console.log("This is get request from the user");
        res.end("<h1>This is from Get request</h1>");
    }

    if(req.header){
        console.log(req.header);
        
    }
})

server.listen(5000, ()=>{
    console.log("Server is running on post 5000");
    
})