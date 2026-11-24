const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consultaController');

// Create
router.get('/add', consultaController.abreAdd);
router.post('/add', consultaController.add);

// Read
router.get('/lst', consultaController.lst);

// Update
router.get('/edt/:id', consultaController.abreEdt);
router.post('/edt/:id', consultaController.edt);

// Delete
router.get('/del/:id', consultaController.del);

module.exports = router;