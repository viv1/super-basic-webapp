const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;
const IP_ADDRESS = process.env.IP_ADDRESS || '127.0.0.1';

app.get('/', (req, res) => res.send('Congrats! This works.'))

if (process.env.NODE_ENV === 'production') {
  app.use (function (req, res, next) {
    var schema = (req.headers['x-forwarded-proto'] || '').toLowerCase();
    if (schema === 'https') {
      next();
    } else {
      res.redirect('https://' + req.headers.host + req.url);
    }
  });
}

app.listen(PORT, IP_ADDRESS, () => console.log(`Listening at ${IP_ADDRESS}:${PORT}`))
