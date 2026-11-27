
const Exame = require('../models/exame');
const Paciente = require('../models/paciente'); //faz com que o exame fique vinculado a um paciente

// CREATE

exports.abreAdd = async (req, res) => {
    try {
        const pacientes = await Paciente.find();

        res.render('exames/add', {
            pacientes
        });

    } catch (error) {
        console.error(error);
        res.send('Erro ao abrir formulário de exame');
    }
};

exports.add = async (req, res) => {
    try {

        await Exame.create(req.body);

        res.render('exames/addok');

    } catch (error) {
        console.error(error);
        res.send('Erro ao cadastrar exame');
    }
};

// READ

exports.lst = async (req, res) => {
    try {

        const exames = await Exame.find()
            .populate('paciente');

        res.render('exames/lst', {
            exames
        });

    } catch (error) {
        console.error(error);
        res.send('Erro ao listar exames');
    }
};

// UPDATE

exports.abreEdt = async (req, res) => {
    try {

        const exame = await Exame.findById(
            req.params.id
        );

        const pacientes = await Paciente.find();

        res.render('exames/edt', {
            exame,
            pacientes
        });

    } catch (error) {
        console.error(error);
        res.send('Erro ao carregar exame para edição');
    }
};

exports.edt = async (req, res) => {
    try {

        await Exame.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.redirect('/exames/lst');

    } catch (error) {
        console.error(error);
        res.send('Erro ao atualizar exame');
    }
};

// DELETE

exports.del = async (req, res) => {
    try {

        await Exame.findByIdAndDelete(
            req.params.id
        );

        res.redirect('/exames/lst');

    } catch (error) {
        console.error(error);
        res.send('Erro ao excluir exame');
    }
};