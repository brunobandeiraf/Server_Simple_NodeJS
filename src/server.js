import http from 'node:http';
//const http = require('http')
//importação via "commonjs","

const users = []

const server = http.createServer((req, res) => {
    const {method, url} = res

    if(method === 'GET' && url === '/users'){
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }
    if(method === 'POST' && url === '/users'){
        return res.end(user.push({
            id: 1,
            name: 'Bruno Bandeira',
            email: 'bruno@example.com',
        }))

        return res.writeHead(201).end()
    }
    //return res.end('Hello World')
    return res.writeHead(404).end()
})

server.listen(3333)
//renomiei node --watch src/server.js para o comando abaixo
//npm run dev 