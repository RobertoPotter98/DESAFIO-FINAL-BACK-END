const Paciente = require('../models/paciente');
const Consulta = require('../models/consulta');
const Exame = require('../models/exame');


// CREATE

// Abre a tela de cadastro
exports.abreAdd = (req, res) => {
    res.render('pacientes/add');
};

// Salva o novo paciente
exports.add = async (req, res) => {
    try {
        await Paciente.create(req.body);

        res.render('pacientes/addok');
       

    } catch (error) {
        console.error(error);
        res.send('Erro ao cadastrar paciente');
    }
};

// READ

// Lista todos os pacientes
exports.lst = async (req, res) => {
    try {

        const pacientes = await Paciente.find();

        res.render('pacientes/lst', {
            pacientes
        });

    } catch (error) {
        console.error(error);
        res.send('Erro ao listar pacientes');
    }
};

// UPDATE

// Abre a edição
exports.abreEdt = async (req, res) => {
    try {

        const paciente = await Paciente.findById(
            req.params.id
        );

        res.render('pacientes/edt', {
            paciente
        });

    } catch (error) {
        console.error(error);
        res.send('Erro ao carregar dados para edição');
    }
};

// Atualiza o paciente
exports.edt = async (req, res) => {
    try {

       await Paciente.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
        new: true,
        runValidators: true
    }
);

        res.redirect('/pacientes/lst');

    } catch (error) {
        console.error(error);
        res.send('Erro ao atualizar paciente');
    }
};

// DELETE

// Exclui o paciente somente se não houver consultas vinculadas
exports.del = async (req, res) => {
    try {

      const consultas = await Consulta.find({
    paciente: req.params.id
});

const exames = await Exame.find({
    paciente: req.params.id
});

if (consultas.length > 0 || exames.length > 0) {

    return res.send(
        'Não é possível excluir o paciente pois existem consultas ou exames vinculados.'
    );

}

await Paciente.findByIdAndDelete(
    req.params.id
);

res.redirect('/pacientes/lst');

    } catch (error) {
        console.error(error);
        res.send('Erro ao excluir paciente');
    }
};