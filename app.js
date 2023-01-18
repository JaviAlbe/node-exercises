const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

//Configure dynamic templates with the PUG library
app.set('view engine', 'pug')
//Tell PUG what folder contains the views
app.set('views', 'views')

const adminData = require('./routes/admin')

const shopRoutes = require('./routes/shop.js')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public',)))

app.use('/admin', adminData.routes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})


app.listen(3000)

