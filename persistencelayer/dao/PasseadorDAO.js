const mongoose = require('mongoose');
const IPasseadorDAO = require('./IPasseadorDAO.js');
const Passeador = require('../models/Passeador');

class PasseadorDAO_Mongoose extends IPasseadorDAO {

  constructor() {
    super();
    mongoose.connect('mongodb+srv://leandrovaguetti:engsoft2@poli.ihq71yz.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
  //
  async create(req) {
    const passeador = await Passeador.create(req.body);
    return passeador;
  }
  //
  async search(req) {
    let passeadores = await Passeador.find(
      { cliente: req.query.cliente }
    );
    return passeadores;
  }

}
module.exports = PasseadorDAO_Mongoose;