const express = require('express')
const app = express() //objekt av express, instans
const port = 3000
const staticDir = __dirname + '\\client\\'

const dbModule = require('./dBModule')
const MessageModel = require('./MessageModel')


app.use(express.static(staticDir)) //alla statiska filer ligger i mappen i client



app.use(express.json()) //gör så att man kan skicka post
app.use(express.urlencoded())

app.set('view engine', 'ejs')  //vymotor det som kommer att synas som ejs, dynamikst html

app.get('/klubb', async (req, res) => { // för nya ejs
  let allMessages = await MessageModel.getAllMessage()
  res.render('pages/klubb.ejs', { message: allMessages })

})

app.post('/klubb', async (req, res) => { //request och response
  const message = await MessageModel.createMessage(req.body.email, req.body.message)
  await dbModule.Store(message)

  const messages = await MessageModel.getAllMessage();
  res.render('pages/klubb.ejs', { message: messages.reverse() })

})


app.get('/liverpool', (req, res) => {
  res.render('pages/liverpool.ejs')

})

app.get('/', (req, res) => {
  res.render('pages/test.ejs')
})
app.get('/nyheter', (req, res) => {
  res.render('pages/nyheter.ejs')
})
app.get('/kontakt', (req, res) => {
  res.render('pages/kontakt.ejs')
})
app.get('/kalender', (req, res) => {
  res.render('pages/kalender.ejs')
})

app.get('/trupp', (req, res) => {
  res.render('pages/trupp.ejs')
})





app.listen(port, () => console.log(`Example app listening on port ${port}!`))


