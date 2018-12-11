'use strict'
//
var IPWIFI = require('./database/collections/HOST');

var express = require('express');
var bodyParser = require('body-parser');

var app = express()
var port = process.env.PORT || 4030

//const service = require('./routes/api/v1.0')
var service = require('./routes/api/v1.0/services');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



//servicios del api-rset
app.use('/api/v1.0/',service)
//app.use(service)

app.listen(port, () => {
    console.log(`Api-rest inmueble corriendo en ${IPWIFI}:${port}`)
})

module.exports = app
