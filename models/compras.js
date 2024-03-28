const { Double } = require('mongodb');
const { Schema, model } = require('mongoose');

const CompraSchema = new Schema({
    nombreInsumo: {
        type: String,
    },
    fecha: {
        type: String
    },
    Proveedor: {
        type: String,
        
    },
    numRecibo: {
        type: String,
        unique: true
    },
    IVA: {
        type: String
    },
    cantidad: {
        type: String
    },
    total: {
        type: String
  
    },
   
});

module.exports = model('Compra', CompraSchema);


