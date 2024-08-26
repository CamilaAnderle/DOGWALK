const IPasseadorController = require('./IPasseadorController.js');
const config = require('../config.js');
const PasseadorDAO = require('../persistencelayer/dao/' + config.IPasseadorDAO);
let passeadordao = new PasseadorDAO();

class PasseadorController extends IPasseadorController {
  constructor() {
    super();
  }
  // Retorna os passeadores recomendados
  async getPasseadores(req, res) {
    let passeadors = await passeadordao.search(req);
    return res.json(passeadors);
  }
  // Cria um passeador
  async create(req, res) {
    const passeador = await passeadordao.create(req);
    return res.json(passeador);
  }
}
module.exports = PasseadorController;