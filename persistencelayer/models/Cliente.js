const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema(
  {}
);

module.exports = Pessoa.discriminator('Pessoa', clienteSchema);