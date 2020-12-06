const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({ //nytt schema, dokument och beskriver vad de kommer innehålla
    name: String,
    email: String,
    age : Number
});

const Person = mongoose.model('Person', personSchema); //skapas en modell av typen model av typen personschemat

exports.createPerson = (name, email) => { // skapar en ny modell med det innehållet vi skickat med och returna modellen där det är request
  var person = new Person({
    name: name,
    email: email,
    age: age
  })
  return person
}
