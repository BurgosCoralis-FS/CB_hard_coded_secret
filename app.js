const express = require('express')
const app = express()
const port = 3000

const SECRET_KEY = 'verySuperSecretKey3000'

app.get('/', (req, res) => {
    res.send(`The secret key is ${SECRET_KEY}`)
})

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})