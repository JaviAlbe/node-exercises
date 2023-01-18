const express = require('express')
const path =  require('path')
const rootDir =  require('../util/path.js')

const adminData =  require('./admin.js')

const router =  express.Router()

router.get('/', (req, res, next) => {

    const products = adminData.products
    //no dynamic template
    // console.log(adminData.products)
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'))

    //PUG dynamic template. We also pass the prodcuts added in shop view
    res.render('shop', {prods: products, docTitle:'Shop'})
})

module.exports = router