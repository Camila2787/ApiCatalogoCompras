const { response } = require('express');
const Catalogo= require('../models/catalogo');

const getCatalogo = async (req, res) => {
    try {
        const catalogo = await Catalogo.find();
        res.json({
            msg: catalogo
        });
    } catch (error) {
        res.json({
            msg: error
        });
    }
};

const postCatalogo = async (req, res) => {
    const datos = req.body;
    let mensaje = 'Inserción exitosa';
    try {
        const nuevoCatalogo = new Catalogo(datos);
        await nuevoCatalogo.save();
        console.log(nuevoCatalogo);
    } catch (error) {
        mensaje = error;
        console.log(error);
    }
    res.json({
        msg: mensaje
    });
};

const putCatalogo = async (req, res) => {
    const {nombreProducto, fechaRegistro, tipoEstampado, color, stock, tamañoEstampado, precioProducto, tipoCatalogo, imagenProducto} = req.body;
    let mensaje = 'Actualización exitosa';

    try {
        await Catalogo.findOneAndUpdate({ color: color}, {
            nombreProducto: nombreProducto,
            fechaRegistro: fechaRegistro,
            tipoEstampado: tipoEstampado,
            color: color,
            stock: stock,
            tamañoEstampado: tamañoEstampado,
            precioProducto: precioProducto,
            tipoCatalogo: tipoCatalogo,
            imagenProducto: imagenProducto
        });
    } catch (error) {
        mensaje = error;
    }

    res.json({
        msg: mensaje
    });
};

const deleteCatalogo = async (req, res) => {
    const { color} = req.body;
    let mensaje = 'Eliminación Exitosa';

    try {
        await Catalogo.findOneAndDelete({color: color});
    } catch (error) {
        mensaje = error;
    }

    res.json({
        msg: mensaje
    });
};

module.exports = {
    getCatalogo,
    postCatalogo,
    putCatalogo,
    deleteCatalogo
};

