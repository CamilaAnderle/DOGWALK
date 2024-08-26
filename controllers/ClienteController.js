const IClienteController = require('./IClienteController.js');
const config = require('../config.js');
const ClienteDAO = require('../persistencelayer/dao/' + config.IClienteDAO);
let clientedao = new ClienteDAO();

class ClienteController extends IClienteController {
  constructor() {
    super();
  }
  // Cria um cliente
  async create(req, res) {
    const cliente = await clientedao.create(req);
    return res.json(cliente);
  }
}
module.exports = ClienteController;