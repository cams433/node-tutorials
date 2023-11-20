const http = require('http')

const server = http.createServer((req, res) => {
 if(req.url === '/') {
  res.end('Welcome to our home page')
 }
 if(req.url === '/about') {
  res.end('Here is our short hisotry')
 }
 res.end(`
 <h1>Oops!</h1>
 <p>We can't to find the page you are loking for</p>
 <a href="/">back home</a>
 `)
})

server.listen(5000)
