const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
// main().catch(err => console.log(err));
mongoose.connect('mongodb://localhost/glossary');

// 2. Set up any schema and models needed by the app
const glossarySchema = new mongoose.Schema({
  word: String,
  definition: String
});

const Glossary = mongoose.model('Glossary', glossarySchema);

// 3. Export the models
exports.save = (data) => {
  // data is coming from app.post in server index?
  console.log(data);
  // return Glossary.create(data);
  return Glossary.create({word: "word", definition: "definition"});
}

exports.getAll = () => {
  return Glossary.find({});
}

// 4. Import the models into any modules that need them