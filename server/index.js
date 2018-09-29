const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const shopifyControllers = require('./controllers/shopify');

app.prepare()
  .then(() => {
    const server = express()

    server.get('/shopify', shopifyControllers.getIndex)
    server.get('/shopify/callback', shopifyControllers.getCallback)

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
})