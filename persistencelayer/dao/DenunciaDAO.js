const mongoose = require('mongoose');
const IDenunciaDAO = require('./IDenunciaDAO.js');
const Denuncia = require('../models/Denuncia');

class DenunciaDAO_Mongoose extends IDenunciaDAO {

  constructor() {
    super();
    mongoose.connect('mongodb+srv://leandrovaguetti:engsoft2@poli.ihq71yz.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
  //
  async create(req) {
    const denuncia = await Denuncia.create(req.body);
    return denuncia;
  }
}
module.exports = DenunciaDAO_Mongoose;