const mongoose = require('../connect');
const Schema = mongoose.Schema;

const usuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
    },
    ci: {
        type: String,
        required: [true, 'Falta el CI']
    },
    password:{
        type: String,
        required: 'Contraseña requerida'
    },
    email: {
        type: String,
        required: 'Falta el email',
        match: /^(([^<>()\[\]\.,;:\s @\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    },

    telefono: Number,
    log: Number,
    lat: Number,
    fechaRegistro: {
        type: Date,
        default: Date.now()
    },
    avatar: String,
    tipo: String
});

const usuario = mongoose.model('Usuario',usuarioSchema);
module.exports = usuario;
