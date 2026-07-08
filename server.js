import express from 'express'
import { createReadStream } from 'fs'
import { readFile } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PORT = process.env.PORT || 3000
const app = express()

// Security headers
app.use((_req, res, next) => {
  res.setHeader('X-Frame-Options', 'SAMEORIGIN')
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
  next()
})

// Serve static files from dist/
app.use(express.static(join(__dirname, 'dist'), {
  maxAge: '1y',
  immutable: true,
}))

// SPA fallback — all unrecognised routes serve index.html
app.get('*', async (_req, res) => {
  try {
    const html = await readFile(join(__dirname, 'dist', 'index.html'), 'utf-8')
    res.type('html').send(html)
  } catch {
    res.status(404).send('Not found')
  }
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`reconfintech.com — live on http://0.0.0.0:${PORT}`)
})
