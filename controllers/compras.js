const { response } = require('express');
const Compras = require('../models/compras');

const getCompras = async (req, res) => {
    try {
        const compra = await Compras.find();
        res.json({
            msg: compra
        });
    } catch (error) {
        res.json({
            msg: error
        });
    }
};

const postCompras = async (req, res) => {
    const datos = req.body;
    let mensaje = 'Inserción exitosa';
    try {
        const nuevaCompra = new Compras(datos);
        await nuevaCompra.save();
        console.log(nuevaCompra);
    } catch (error) {
        mensaje = error;
        console.log(error);
    }
    res.json({
        msg: mensaje
    });
};

const putCompras = async (req, res) => {
    const {nombreInsumo, fecha, Proveedor, numRecibo, IVA, cantidad, total} = req.body;
    let mensaje = 'Actualización exitosa';

    try {
        await Compras.findOneAndUpdate({ nombreInsumo: nombreInsumo}, {
            nombreInsumo: nombreInsumo,
            fecha: fecha,
            Proveedor: Proveedor,
            numRecibo: numRecibo,
            IVA: IVA,
            cantidad: cantidad,
            total: total
        });
    } catch (error) {
        mensaje = error;
    }

    res.json({
        msg: mensaje
    });
};

const deleteCompras = async (req, res) => {
    const {nombreInsumo} = req.body;
    let mensaje = 'Eliminación Exitosa';

    try {
        await Compras.findOneAndDelete({ nombreInsumo: nombreInsumo});
    } catch (error) {
        mensaje = error;
    }

    res.json({
        msg: mensaje
    });
};

module.exports = {
    getCompras,
    postCompras,
    putCompras,
    deleteCompras
};

