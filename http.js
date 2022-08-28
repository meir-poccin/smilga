const http = require('http')

const server = http.createServer((req, res)=>{
if(req.url === '/'){
	res.end('welcome to homepage')
}
//res.write('welcome')
//res.end()
else if(req.url === '/about'){
	res.end('here is our history')
} else {
res.end(`<h1>Oops!</h1> 
	<p>We can't find your page</p>
	<a href='/'>back home</a>`)
}

})

server.listen(5000)