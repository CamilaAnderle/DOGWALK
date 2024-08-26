const mongoose = require('mongoose');
const IAgendamentoDAO = require('./IAgendamentoDAO.js');
const Agendamento = require('../models/Agendamento');

class AgendamentoDAO_Mongoose extends IAgendamentoDAO {

  constructor() {
    super();
    mongoose.connect('mongodb+srv://leandrovaguetti:engsoft2@poli.ihq71yz.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
  //
  async create(req) {
    const agendamento = await Agendamento.create(req.body);
    return agendamento;
  }
  //
  async searchForUser(req) {
    let agendamentos = await Agendamento.find(
      { id: req.query.id }
    );
    return agendamentos;
  }
}
module.exports = AgendamentoDAO_Mongoose;