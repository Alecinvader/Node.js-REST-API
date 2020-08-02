const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

require('dotenv').config();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const uri = process.env.ATLAS_URI;
if(process.env.ENV === 'Test'){
  console.log('This is a test');
  const db = mongoose.connect('mongodb://localhost/bookAPI_Test');


} else {
  console.log('This is production level')
  const db = mongoose.connect('mongodb+srv://Alec-Reynolds:Admin-Password@cluster0.tc5tp.mongodb.net/bookAPI?retryWrites=true&w=majority', {useNewUrlParser: true});

}


//const db = mongoose.connect('mongodb://localhost/bookAPI');
let port = process.env.PORT || 4000;
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);


app.use('/api', bookRouter);


app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
  })


app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;