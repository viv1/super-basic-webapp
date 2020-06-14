const express = require('express')
const app = express()
const port = 3333

app.get('/', (req, res) => res.send('Congrats! This works.'))

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
