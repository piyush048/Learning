const express = require('express');

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.post("/user", (req,res)=>{
    const userData = req.body;
    res.send("Name: "+ userData.name+"\nAge: "+ userData.age+ "\nAddress: "+ userData.address);
})

app.put("/api/user", (req,res)=> {
    res.send("This is Put Request");
})

const port = 3000;

app.listen(port, ()=>{
    console.log(`Port is Running at http://localhost:${port}`);
})