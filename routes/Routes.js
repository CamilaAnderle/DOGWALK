const express = require('express');
const bodyParser = require('body-parser');
//================================

var cors = require('cors');
const IRoutes = require('./IRoutes.js');
const app = express();
const config = require('../config.js');
let DenunciaController = require('../controllers/' + config.IDenunciaController);
let PessoaController = require('../controllers/' + config.IPessoaController);
let ClienteController = require('../controllers/' + config.IClienteController);
let PasseadorController = require('../controllers/' + config.IPasseadorController);
let PetController = require('../controllers/' + config.IPetController);
let AvaliacaoController = require('../controllers/' + config.IAvaliacaoController);
let AgendamentoController = require('../controllers/' + config.IAgendamentoController);
let denunciaController = new DenunciaController();
let pessoaController = new PessoaController();
let clienteController = new ClienteController();
let passeadorController = new PasseadorController();
let petController = new PetController();
let avaliacaoController = new AvaliacaoController();
let agendamentoController = new AgendamentoController();

class Rօutes extends IRoutes {

  constructor() {
    super();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static('public'));
  }

  get() {
    // Retorna se o email e login existem para confirmar o login
    app.get('/pessoas/login', pessoaController.login(req, res));

    // Retorna os pets com base no id do usuário
    app.get('/pets/cadastrados', petController.getUserPets(req, res));

    // Retorna os agendamentos do cliente/passeador
    app.get('/agendamentos/visualizar', agendamentoController.getAgendamentos(req, res));

    // Retorna os passeadores recomandados com base no cliente 
    app.get('/passeadores/todos', passeadorController.getAll(req, res));
  }

  post() {
    // Cria uma denuncia
    app.post('/agendamento/denuncia', denunciaController.create(req, res));
    
    // Cria uma avaliacao
    app.post('/agendamento/avaliacao', avaliacaoController.create(req, res));
    
    // Cria um novo cliente
    app.post('/cadastros/clientes', clienteController.create(req, res));
    
    // Cria um novo passeador
    app.post('/cadastros/passeadores', passeadorController.create(req, res));
    
    // Cria um novo pet
    app.post('/cadastros/pets', petController.create(req, res));

    //
    app.post('/agendamentos/criar', agendamentoController.createAgendamento(req, res));
    
  }

  listen() {
    app.listen(3000, () => console.log('server started'));
  }

}
module.exports = Rօutes;