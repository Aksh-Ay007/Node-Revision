
const http=require('http')

const server=http.createServer((req,res)=>{

  if(req.url==='/secret'){
    res.end('iam the secret dont use me plese!')
  }

  res.end('hello world')
})

let port=3000

server.listen(port,()=>{

  console.log(`server is running on : ${port}`);
})
