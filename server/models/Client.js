const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        unique: true
    },
    nombre: {
        type: String
    },
    apellidos: {
        type: String
    },
    foto: {
        type: String,
        required: true
    },
    coches: {
        coche: {
            type: String,
            required: true
        }
    },
    historial: {
        sesion: {
            llegada: {
                type: Date,
                required: true
            },
            ida: {
                type: Date,
                required: true
            }
        }
    }
});

module.exports = mongoose.model('client', ClientSchema);