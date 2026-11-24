const mongoose = require('mongoose');

const PacienteSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },

    cpf: {
        type: String,
        required: true,
        trim: true,
        maxlength: 14
    },

    telefone: {
        type: String,
        required: true,
        trim: true,
        maxlength: 15
    },

    dataNascimento: {
        type: Date
    }

});

module.exports = mongoose.model('Paciente', PacienteSchema);