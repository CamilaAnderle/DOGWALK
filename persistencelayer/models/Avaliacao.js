const mongoose = require('mongoose');

const AvalicaoSchema = new mongoose.Schema(
  {
    nota: Number,
    descricao: String,
  }
);

module.exports = mongoose.model('Avalicao', AvalicaoSchema);