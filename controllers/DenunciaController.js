const IDenunciaController = require('./IDenunciaController.js');
const config = require('../config.js');
const DenunciaDAO = require('../persistencelayer/dao/' + config.IDenunciaDAO);
let denunciadao = new DenunciaDAO();

class DenunciaController extends IDenunciaController {
  constructor() {
    super();
  }
  // Cria uma denuncia
  async createDenuncia(req, res) {
    let denuncias = await denunciadao.create(req);
    return res.json(denuncias);
  }
}
module.exports = DenunciaController;