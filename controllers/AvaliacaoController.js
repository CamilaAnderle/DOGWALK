const IAvaliacaoController = require('./IAvaliacaoController.js');
const config = require('../config.js');
const AvaliacaoDAO = require('../persistencelayer/dao/' + config.IAvaliacaoDAO);
let avaliacaodao = new AvaliacaoDAO();

class AvaliacaoController extends IAvaliacaoController {
  constructor() {
    super();
  }
  // Cria uma avaliacao
  async createAvaliacao(req, res) {
    let Avaliacaos = await avaliacaodao.create(req);
    return res.json(Avaliacaos);
  }
}
module.exports = AvaliacaoController;