
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

// Importing files
const Book = require('./models/bookModel');
const routes = require('./routes')(Book);

const app = express();
let port = process.env.PORT || 4000;

mongoose.connect('mongodb+srv://Alec-Reynolds:Admin-Password@cluster0.tc5tp.mongodb.net/bookAPI?retryWrites=true&w=majority', {useNewUrlParser: true});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use('/', routes);


// app.get('/', (req, res) => {
//   res.send('Welcome to my Nodemon API!');
// });

if (process.env.NODE_ENV === 'production') {

  app.use(express.static(path.join(__dirname, 'client/build')))

  // app.get('/*', (request, response) => {
  //   response.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); 
  // })

}



app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
