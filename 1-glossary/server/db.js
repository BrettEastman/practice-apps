const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
// main().catch(err => console.log(err));
mongoose.connect('mongodb://localhost/words');

// 2. Set up any schema and models needed by the app
const glossarySchema = new mongoose.Schema({
  word: String,
  definition: String
});

const Glossary = mongoose.model('Glossary', glossarySchema);

// 3. Export the models
exports.save = (data) => {
  // data is coming from app.post in server index?
  console.log('db data: ', data);
  return Glossary.create(data);
}

exports.getAll = () => {
  return Glossary.find({});
}

exports.deleteOne = (id) => {
  return Glossary.deleteOne({_id: id}) // like saying, if you see this data as an id, delete it. That is the 'condition'
}

// 4. Import the models into any modules that need them