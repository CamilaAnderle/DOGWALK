const mongoose = require('mongoose');
const IPetDAO = require('./IPetDAO.js');
const Pet = require('../models/Pet');

class PetDAO_Mongoose extends IPetDAO {

  constructor() {
    super();
    mongoose.connect('mongodb+srv://leandrovaguetti:engsoft2@poli.ihq71yz.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
  //
  async create(req) {
    const pet = await Pet.create(req.body);
    return pet;
  }
  //
  async searchForUser(req) {
    let pet = await Pet.find({ id: req.query.id });
    return pet;
  }
}
module.exports = PetDAO_Mongoose;