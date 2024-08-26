const mongoose = require('mongoose');

const DenunciaSchema = new mongoose.Schema(
  {
    descricao: String,
  }
);

module.exports = mongoose.model('Denuncia', DenunciaSchema);