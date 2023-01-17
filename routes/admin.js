 const express = require('express')
 const path = require('path')
 const rootDir =  require('../util/path.js')
 const router =  express.Router()

 const products = []

 router.get('/add-product', (req, res, next) => {
     res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
 })

 //app.post and app.get execute only when the type of request is one of those
 router.post('/add-product', (req, res, next) => {
     console.log(req.body)
     products.push({title: req.body.title})
     res.redirect('/')
 })

 module.exports = {
     routes : router,
     products : products
 }