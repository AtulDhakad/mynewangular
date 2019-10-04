
const express = require('express');
const app = express();
const router = express.Router();

const registerCon = require('../controller/registerCon');
const ServerPort = require('../models/ServerPort');
const middleware = require('../middleware/middleware');

const jwt = require('jsonwebtoken');

router.post('/add',registerCon.addRegister);
router.post('/login',registerCon.Login);
router.get('/allusers',middleware.checkToken,registerCon.allusers);

router.get('/logout', function(req, res) {
  res.status(200).json({
    token: null,
    success:true, 
    message:'logout api'
}); 
});

// router.get('/me', function(req, res) {
//   var token = req.headers['x-access-token'];
//   if (!token) return res.status(401).send({ auth: false, message: 'No token provided.'+token });
  
//   jwt.verify(token, config.secret, function(err, decoded) {
//     if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
//     res.status(200).send(decoded);
//   });
// });

router.get('/me',middleware.checkToken);

// router.post('/login', function(req, res){
      
//   const serverport = new ServerPort(req.body);
  
//  let user =  serverport.findOne({ email: req.body.email });
//  res.status(200).send("unable to save to database"+user);
//     serverport.findOne({email: 'atul@gmail.com'})
//   .then(data => {
//       res.status(200).send("unable to save to database"+data);
//       // if (data) {
//       //     console.log('login data', data);
//       //    // const token = jwt.sign(data,'JWT_TOKEN_SECRET',{expiresIn: "1h"});
//       //     res.status(201).json({
//       //         message: "Loged In",
//       //         token: data
//       //     });
//       // } else {
//       //     res.status(201).json({
//       //         message: "Unauthorised",
//       //         token:null
//       //     });
//       // }
//   }).catch(err => {
//       res.status(400).json({
//           message: err,
//           token:null
//       });
//   });
// });

router.post('/logins', function (req, res) {

  let user =  ServerPort.findOne({ email: req.body.email,password:req.body.password });
  if (user) {
      return res.status(400).send('That user already exisits!');
  } else {
      // Insert the new user if they do not exist yet
      // user = new User({
      //     email: req.body.email,
      //     password: req.body.password
      // });
      // await user.save();
      // res.send(user);
      return res.status(200).send('That user !'+user);
  }

});


router.post('/register', function(req, res) {
  
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
  User.create({
    name : req.body.name,
    email : req.body.email,
    password : hashedPassword
  },
  function (err, user) {
    if (err) return res.status(500).send("There was a problem registering the user.")
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  }); 
});







// router.get('/test').then(serverport => {
//   res.json('Server added successfully'+serverport+' seregh'+serverport);

// //    res.status(201).json({
// //         data: result,
// //         success:true, 
// //         message:'User insert Successfully'

// //     });
// }).catch(err => {
// res.status(400).send("unable to save to database");
// });

// }

// const ServerPort = require('../models/ServerPort');

// ServerPortRouter.route('/add').post(function (req, res) {
//   const serverport = new ServerPort(req.body);
//     serverport.save().then(serverport => {
//         res.json('Server added successfully');
//     })
//     .catch(err => {
//     res.status(400).send("unable to save to database");
//     });
// });

router.get('/',function (req, res) {
    ServerPort.find(function (err, serverports){
    if(err){
      console.log(err);
      res.json(401);
    }
    else {
      res.json(serverports);
      res.json(200);
    }
  });
});

module.exports = router;