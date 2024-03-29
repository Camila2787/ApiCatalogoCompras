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
        type: String
    },
    tamanoEstampado: {
        type: String
    },
    precioProducto: {
        type: String
    },
    tipoCatalogo: {
        type: String
    },
    imagenProducto: {
        type: String
    }
});

module.exports = model('Catalogo', CatalogoShema);



