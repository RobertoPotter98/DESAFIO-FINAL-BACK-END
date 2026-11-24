const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

// Create 
router.get('/add', pacienteController.abreAdd);
router.post('/add', pacienteController.add);

// Read 
router.get('/lst', pacienteController.lst);

// Update 
router.get('/edt/:id', pacienteController.abreEdt);
router.post('/edt/:id', pacienteController.edt);

// Delete 
router.get('/del/:id', pacienteController.del);

module.exports = router;