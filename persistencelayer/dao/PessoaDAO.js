const mongoose = require('mongoose');
const IPessoaDAO = require('./IPessoaDAO.js');
const Pessoa = require('../models/Pessoa');

class PessoaDAO_Mongoose extends IPessoaDAO {

  constructor() {
    super();
    mongoose.connect('mongodb+srv://leandrovaguetti:engsoft2@poli.ihq71yz.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
  //
  async search(req) {
    let retorno = await Pessoa.find(
      {
        email: req.query.email,
        senha: req.query.senha,
      }
    );
    return retorno;
  }

}
module.exports = PessoaDAO_Mongoose;