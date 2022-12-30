const fs = require('fs');
const http = require('http');


const port =process.env.PORT || 3000 ;

const sever=http.createServer((req,res)=>{
  console.log(req.url)
  
  res.setHeader('Content-Type','text/html')
  if(req.url === "/"){
    res.statusCode=200;
  res.end('<h1>this my first node app</h1>')
}  
 else if(req.url === "/about"){
  
  res.statusCode=200;
  res.end('<h1>ABOUT this my first node ABOUT</h1>')
  
 }
 else if(req.url === "/hello"){
  
  res.statusCode=200;
 const data = fs.readFileSync("index.html")
  res.end(data.toString())
  
 }
 else{
  
  res.statusCode=404;
  res.end('<h1>Not found</h1>')
 }   
})
sever.listen(port,()=>{
    console.log(`this the server ${port}`)
})