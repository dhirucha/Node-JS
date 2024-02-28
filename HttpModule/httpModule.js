const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url == '/'){
        res.write('<h1>Hello, NodeJS</h1>')
    }
    res.end();
})


server.listen(5000);

console.log('The server is running on port 5000')
