const http = require('http')

const PORT = 3020
const HOSTNAME = 'localhost'

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('content-type','text/plain')
    res.end('Node server created by Dheeraj chaubey')
})

server.listen(PORT, () =>{
    console.log(`Server running at ${HOSTNAME}:${PORT}`)
})