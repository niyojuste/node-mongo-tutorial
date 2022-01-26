const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routers/routes')

mongoose.connect("mongodb://127.0.0.1:27017/acmedb", { useNewUrlParser: true }).then(() => {
    const app = express()
    app.use(express.json())
    app.use('/api', routes)

    app.listen(3000, () => {
        console.log('Server is running')
    })
})