const IAgendamentoController = require('./IAgendamentoController.js');
const config = require('../config.js');
const AgendamentoDAO = require('../persistencelayer/dao/' + config.IAgendamentoDAO);
let agendamentodao = new AgendamentoDAO();

class AgendamentoController extends IAgendamentoController {
  constructor() {
    super();
  }

  // Retorna os agendamentos de uma pessoa
  async getAgendamentos(req, res) {
    let agendamentos = await agendamentodao.searchForUser(req);
    return res.json(agendamentos);
  }
  // Cria um agendamento
  async create(req, res) {
    const agendamento = await agendamentodao.create(req);
    return res.json(agendamento);
  }
}
module.exports = AgendamentoController;