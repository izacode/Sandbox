const http =require('http');
const path = require('path');

var fs = require('fs');
const favPath = path.join(__dirname, 'favicon.png')
const PORT = 8000;
let count = 0;
const server =  http.createServer((req,res)=>{
    count ++
    switch (req.url){
       case '/favicon.ico':
           count --
           res.setHeader('Content-Type', 'image/png');
        //    fs.createReadStream(favPath).pipe(res);
           const fav = fs.readFileSync(favPath)
           res.write(`<link rel="icon" type="image/png" href='favPath'></link>`)
           break;
       case '/':
           res.write(`It-Incubator : ${count}`);
           break;
        case '/courses':
            res.write("Front to Back");
            break;
         default :
         res.write('404 not found')
    }
    res.end();
})

server.listen(PORT, ()=>{
    console.log(`Server is listening on port: ${PORT}`)
})