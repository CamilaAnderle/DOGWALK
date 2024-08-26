const IPetController = require('./IPetController.js');
const config = require('../config.js');
const PetDAO = require('../persistencelayer/dao/' + config.IPetDAO);
let petdao = new PetDAO();

class PetController extends IPetController {
  constructor() {
    super();
  }
  // Retorna os pets de um usuario
  async getUserPets(req, res) {
    let pets = await petdao.searchForUser(req);
    return res.json(pets);
  }
  // Cria um pet
  async create(req, res) {
    const pet = await petdao.create(req);
    return res.json(pet);
  }
}
module.exports = PetController;