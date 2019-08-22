let express=require('express');
let path=require('path');
let server=express();
server.listen(4000);

server.get('/',(req,res)=>{
    res.send('Hello World!');
});

server.get('/home1',(req,res)=>{
    res.send('you are in home.');
});

server.get('/add',(req,res)=>{
    let num1=parseInt(req.query.num1);
    let num2=parseInt(req.query.num2);
    res.send('Addition is:'+ (num1+num2) + '');
});

server.get('/name',(req,res)=>{
    res.send('Hello,'+ req.query.name);
});

server.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'home.html'));
});


console.log('Hello World!'+__dirname);
