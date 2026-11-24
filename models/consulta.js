const mongoose = require('mongoose');

const ConsultaSchema = new mongoose.Schema({

    medico: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },

    especialidade: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },

    data: {
        type: Date,
        required: true
    },

    observacoes: {
        type: String,
        trim: true,
        maxlength: 500
    },

    paciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente',
        required: true
    }

});

module.exports = mongoose.model('Consulta', ConsultaSchema);