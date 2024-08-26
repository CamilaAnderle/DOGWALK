const mongoose = require('mongoose');

const PasseadorSchema = new mongoose.Schema(
  {
    descricao: String,
  }
);

module.exports = Pessoa.discriminator('Pessoa', PasseadorSchema);