
const mongoose = require('mongoose');

const ExameSchema = new mongoose.Schema({
   tipo: {
    type: String,
    required: true,
    trim: true
},
    data: {
        type: Date,
        required: true
    },
 resultado: {
    type: String,
    trim: true,
    maxlength: 500
},
// Vínculo com o Model Paciente
paciente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Paciente',
    required: true
}
});

module.exports = mongoose.model('Exame', ExameSchema);