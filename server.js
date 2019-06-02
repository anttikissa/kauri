let http = require('http')
let fs = require('fs')
let os = require('os')

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

let PORT = 9999

server.listen(PORT, () => {
    let url = `http://${os.hostname()}.local:${PORT}/`
    log(url)
})
