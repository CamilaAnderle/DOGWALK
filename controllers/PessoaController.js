const IPessoaController = require('./IPessoaController.js');
const config = require('../config.js');
const PessoaDAO = require('../persistencelayer/dao/' + config.IPessoaDAO);
let pessoadao = new PessoaDAO();

class PessoaController extends IPessoaController {
  constructor() {
    super();
  }
  // Busca a pessoa com base no email e senha para validar login
  async getPessoas(req, res) {
    let pessoas = await pessoadao.search(req);
    return res.json(pessoas);
  }
}
module.exports = PessoaController;