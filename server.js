import { createServer } from 'node:http'
import { readFileSync, existsSync } from 'node:fs'
import { extname, join } from 'node:path'

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
}

const server = createServer((req, res) => {
  let filePath = req.url === '/' ? '/dist/index.html' : '/dist' + req.url
  const ext = extname(filePath)
  if (!existsSync(filePath)) {
    res.statusCode = 404
    res.end('Not found')
    return
  }
  res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream')
  res.end(readFileSync(filePath))
})

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})
