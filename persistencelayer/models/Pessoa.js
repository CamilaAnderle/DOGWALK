const mongoose = require('mongoose');

const PessoaSchema = new mongoose.Schema(
  {
    nome: String,
    email: String,
    senha: String,
    cpf: String,
    telefone: String,
  }
);

module.exports = mongoose.model('Pessoa', PessoaSchema);