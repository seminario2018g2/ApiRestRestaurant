const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.1.105:27017/Restaurante', (err, res) =>{
    if(err) throw err
    console.log('Conexion a la base de datos establecida')
})


module.exports = mongoose;
