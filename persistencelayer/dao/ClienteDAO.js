const mongoose = require('mongoose');
const IClienteDAO = require('./IClienteDAO.js');
const Cliente = require('../models/Cliente');

class ClienteDAO_Mongoose extends IClienteDAO {

  constructor() {
    super();
    mongoose.connect('mongodb+srv://leandrovaguetti:engsoft2@poli.ihq71yz.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
  async create(req) {
    const cliente = await Cliente.create(req.body);
    return cliente;
  }
}
module.exports = ClienteDAO_Mongoose;