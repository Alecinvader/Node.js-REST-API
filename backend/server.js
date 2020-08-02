const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

require('dotenv').config();

const uri = process.env.ATLAS_URI;
if(process.env.ENV === 'Test'){
  console.log('This is a test');
  const db = mongoose.connect('mongodb://localhost/bookAPI_Test');
} else {
  console.log('This is production level')
  const db = mongoose.connect('mongodb+srv://Alec-Reynolds:Admin-Password@cluster0.tc5tp.mongodb.net/bookAPI?retryWrites=true&w=majority', {useNewUrlParser: true});

  app.use(express.static('frontend/build'));

  app.get('*', (request, response) => {
    res.sendFile(path.join(__dirname,'frontend', 'build', 'index.html')); // relative path
  })


}



//const db = mongoose.connect('mongodb://localhost/bookAPI');
let port = process.env.PORT || 4000;
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', bookRouter);


app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;