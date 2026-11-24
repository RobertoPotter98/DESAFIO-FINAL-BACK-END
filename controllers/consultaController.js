const Consulta = require('../models/consulta');
const Paciente = require('../models/paciente');// consulta seja vinculada a um paciente

// --- CREATE ---
exports.abreAdd = async (req, res) => {
    try {
        const pacientes = await Paciente.find();
        res.render('consultas/add', { pacientes });
    } catch (error) {
        console.error(error);
        res.send('Erro ao abrir formulário de consulta');
    }
};

exports.add = async (req, res) => {
    try {
        await Consulta.create(req.body);
        res.render('consultas/addok');
    } catch (error) {
        console.error(error);
        res.send('Erro ao cadastrar consulta');
    }
};

// --- READ ---
exports.lst = async (req, res) => {
    try {
        const consultas = await Consulta.find().populate('paciente');
        res.render('consultas/lst', { consultas });
    } catch (error) {
        console.error(error);
        res.send('Erro ao listar consultas');
    }
};

// --- UPDATE ---
exports.abreEdt = async (req, res) => {
    try {
        const consulta = await Consulta.findById(req.params.id);
        const pacientes = await Paciente.find();
        res.render('consultas/edt', { consulta, pacientes });
    } catch (error) {
        console.error(error);
        res.send('Erro ao carregar consulta para edição');
    }
};

exports.edt = async (req, res) => {
    try {
        await Consulta.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/consultas/lst');
    } catch (error) {
        console.error(error);
        res.send('Erro ao atualizar consulta');
    }
};

// --- DELETE ---
exports.del = async (req, res) => {
    try {
        await Consulta.findByIdAndDelete(req.params.id);
        res.redirect('/consultas/lst');
    } catch (error) {
        console.error(error);
        res.send('Erro ao excluir consulta');
    }
};