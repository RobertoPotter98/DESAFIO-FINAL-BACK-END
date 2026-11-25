require('dotenv').config();

const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const pacientesRoutes = require('./routes/pacientes');
const examesRoutes = require('./routes/exames');
const consultasRoutes = require('./routes/consultas');

const app = express();

// Conexão com MongoDB
connectDB();

// View  - Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Dashboard
app.get('/', (req, res) => {
    res.render('dashboard');
});

// Rotas
app.use('/pacientes', pacientesRoutes);
app.use('/exames', examesRoutes);
app.use('/consultas', consultasRoutes);

// 404
app.use((req, res) => {
    res.status(404).render('404');
});

// Tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).send(
        'Erro interno do servidor'
    );
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});