const fs=require('fs')
const https=require('https')

var a=10
var b=20;

https.get("https://jsonplaceholder.typicode.com/users?utm_source=chatgpt.com",(res)=>{

  console.log('feteched data');
});

setTimeout(() => {

  console.log('set timout called after 5 sec');
}, 5000);


fs.readFileSync('./note.txt','utf-8')

fs.readFile("./note.txt", "utf-8", (err,data)=>{
  console.log('text read succes',data);
})

function multiply(a,b){
  let res=a*b
return res
}

var c=multiply(a, b)

console.log("multiply result :",c)
