const express = require('express');
const router = express.Router();
const exameController = require('../controllers/exameController');

// Create 
router.get('/add', exameController.abreAdd);
router.post('/add', exameController.add);

// Read 
router.get('/lst', exameController.lst);

// Update 
router.get('/edt/:id', exameController.abreEdt);
router.post('/edt/:id', exameController.edt);

// Delete 
router.get('/del/:id', exameController.del);

module.exports = router;