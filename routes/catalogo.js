const { Router } = require('express');
const router = Router();

const { getCatalogo, postCatalogo, putCatalogo, deleteCatalogo } = require('../controllers/catalogo');

// Listar todos los datos
router.get('/', getCatalogo);

// Consultar dato
router.post('/', postCatalogo);

// Insertar datos
router.put('/', putCatalogo);

// Eliminar datos
router.delete('/', deleteCatalogo);

module.exports = router;




