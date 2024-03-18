const { Schema, model } = require('mongoose');

const CatalogoShema = new Schema({
    nombreProducto: {
        type: String,
        unique: true
    },
    fechaRegistro: {
        type: String
    },
    tipoEstampado: {
        type: String
        
    },
    color: {
        type: String
    },
    stock: {
        type: Number
    },
    tamañoEstampado: {
        type: Number
    },
    precioProducto: {
        type: Number
    },
    tipoCatalogo: {
        type: String
    },
    imagenProducto: {
        type: String
    }
});

module.exports = model('Catalogo', CatalogoShema);



