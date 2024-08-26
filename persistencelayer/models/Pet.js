const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema (
      {
            nome: String,
            porte: String,
            sexo: String,
            alergias: String,
            idade: Number,
            informacoesAdicionais: String,
            comportamento: String,
      }
);

module.exports = mongoose.model('Pet', PetSchema);