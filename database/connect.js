const mongoose = require('mongoose');

//mongoose.connect("mongodb://172.17.0.1:27017/restaurant");
//module.exports = mongoose;

//const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/ApiRestRestauran", {
    useNewUrlParser: true
}).then(() => {
    console.log('conexion a mongodb exitosa');
}).catch(err => {
    console.log('Error en la conexion hacia mongo DB');
});
module.exports = mongoose;
