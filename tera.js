const http = require('http')

let counter = 0;

const PORT = 3003;


const server = http.createServer((req, res)=>{
    counter ++
    // res.writeHead(200, {'Content-Type': 'text/plain', 'Link': 'rel="shortcut icon" href="#"'} );
    res.write(`IT incubator students : ${counter}`)

    res.end()
})

server.listen(PORT, ()=> {
    console.log(`Server is listeniong on port: ${PORT} ...`)
})

