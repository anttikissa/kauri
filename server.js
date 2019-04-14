let http = require('http')
let fs = require('fs')

function log() {
    console.log(...arguments)
}

let server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })

        res.end(fs.readFileSync(__dirname + '/index.html', 'utf8'))
    }
})

server.listen(9999)
