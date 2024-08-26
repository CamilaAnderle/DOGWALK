const mongoose = require('mongoose');
const IAvaliacaoDAO = require('./IAvaliacaoDAO.js');
const Avaliacao = require('../models/Avaliacao');

class AvaliacaoDAO_Mongoose extends IAvaliacaoDAO {

  constructor() {
    super();
    mongoose.connect('mongodb+srv://leandrovaguetti:engsoft2@poli.ihq71yz.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
  //
  async create(req) {
    const avaliacao = await Avaliacao.create(req.body);
    return avaliacao;
  }
}
module.exports = AvaliacaoDAO_Mongoose;