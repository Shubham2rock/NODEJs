const http = require('http')

const server = http.createServer((req, res) => {
  // console.log(req)
  if (req.url === '/') {
    res.end('welcome to our home page')
  }
  if (req.url === '/about') {
    res.end('welcome to our about page')
  }
  res.end(`<h1>OOps</h1> 
  <p> We can't find the page you are looking for </p>
  <a href="/">back home </a>`)
})
server.listen(5000)
