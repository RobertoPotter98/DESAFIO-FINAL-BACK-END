const mongoose = require('mongoose');

const connectDB = async () => {
    try {
       const uri = process.env.MONGO_URI || 'mongodb+srv://robertopotter98_db_user:gNE6TtJjnYLfjOFW@desafiofinalbackend.6l3gvbi.mongodb.net/';
        await mongoose.connect(uri);

console.log(
    `MongoDB conectado em: ${mongoose.connection.host}`
);
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error.message);
        process.exit(1); // Encerra a aplicação se o banco falhar
    }
};

module.exports = connectDB;

