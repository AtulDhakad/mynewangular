const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const cors = require('cors');

const config = require('./db');

mongoose.connect(config.db,{ useNewUrlParser: true }).then(
    ()=>{console.log('connect the datacase atul')},
    err=>{console.log('does not connect database'+err)}); 



    // const MongoClient = require('mongodb').MongoClient;

    // // replace the uri string with your connection string.
    // const uri = "mongodb+srv://atuluser:4rvpuPvwetYwS38F@cluster0-uiwbt.mongodb.net/reactdb"
    // MongoClient.connect(uri, function(err, client) {
    //    if(err) {
    //         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
    //    }
    //    console.log('Connected...');
    //    const collection = client.db("test").collection("devices");
    //    // perform actions on the collection object
    //    client.close();
    // });






    



//app.use(express.static(path.join(__dirname, 'public')));
const ServerPortRouter = require('./api/routes/ServerPortRouter');

app.use((req, res, next) => {
  // res.status(200).send('Welcome to the egeage api');
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Headers",
      "*"
  );
  if (req.method == 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
      return res.status(200).json({});
  }
  next();
});

const jwt =  require('jsonwebtoken');

app.use('/hello',(req ,res,next)=>{

  let token = jwt.sign({data:'data'},
    "key.secret",
  { expiresIn: '24h' 
    });
res.json('hello here is token '+token+"   jwt ");

});

app.use(express.static(__dirname + '/dist/mynewangular'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/mynewangular/index.html'));
});


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
// });

app.use('/serverport', ServerPortRouter);

//const  PORT  =  process.env.PORT  ||  3000;
const  PORT  =   3001;

app.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});