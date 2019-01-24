const express = require('express')
const { json } = require('body-parser')
const massive = require('massive')
const pc = require('./controllers/productController')
require('dotenv').config()

const app = express()
app.use(json())

massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db)
    console.log('\x1b[36m%s\x1b[0m', ' Connected to database...')
})

app.get('/api/products', pc.getAll)
app.get('/api/products/:product_id', pc.getOne)
app.put('/api/products/:product_id', pc.update)
app.post('/api/products', pc.create)
app.delete('/api/products/:product_id', pc.delete)

const port = process.env.PORT || 3000
app.listen(port, console.log('\x1b[35m Listening on port: ' + port))
