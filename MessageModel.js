const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({ //nytt schema, dokument och beskriver vad de kommer innehålla
    email: String,
    text : String
});

const Message = mongoose.model('Message', messageSchema); //skapas en modell av typen model av typen schemat

exports.createMessage = (inMail, inText) => { // skapar en ny modell med det innehållet vi skickat med och returna modellen där det är request
  var message = new Message({
    email: inMail,
    text: inText
  })
  return message
}
