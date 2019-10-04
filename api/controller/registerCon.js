
const ServerPort = require('../models/ServerPort');

const key = require('../secretkey');

const jwt =  require('jsonwebtoken');

exports.addRegister = (req, res) =>{
    const dataserve = new ServerPort(req.body);

       dataserve.save().then(data => {
           res.status(200).json({
                data: null,
                success:true, 
                message:'Server added successfully'

            });
      }).catch(err => {
        res.status(400).json({
            data: null,
            success:false, 
            message:'unable to save to database'

        });
      });

    }


    exports.allusers = (req, res) =>{
   
      ServerPort.find(function (err, serdata){

        if(err){
          console.log(err);
        }
        else {
         //const token = jwt.sign(data,'JWT_TOKEN_SECRET',{expiresIn: "1h"});
        
          res.status(200).json({
                            token: serdata,
                            success:true, 
                            message:'data successfully'
                        }); 
           
        }
      });
  
      }


    // exports.Login = (req, res) => {
    
    //     ServerPort.findOne({ email: req.body.email, password: req.body.password },function (err, data){
              
    //         if (err) {
    //             res.status(400).json({
    //                 data: null,
    //                 success:false, 
    //                 message:'unable to save to database'
    //             });
               
    //         } else {
    //             const token = jwt.sign(data,'JWT_TOKEN_SECRET',{expiresIn: "1h"});
    //             res.status(200).json({
    //                 data: token,
    //                 success:true, 
    //                 message:'data successfully'+JWT_TOKEN_SECRET
    //             });
              
    //         }

         
    //       });
    
    // }

    exports.Login = (req, res) =>{
    
        ServerPort.findOne({ email: req.body.email, password: req.body.password },function (err, serdata){

            if(err){
              console.log(err);
            }
            else {
             //const token = jwt.sign(data,'JWT_TOKEN_SECRET',{expiresIn: "1h"});
              let tokenjwt = jwt.sign({serdata},
                key.secret,
                { expiresIn: '24h' 
                });
              res.status(200).json({
                                token: tokenjwt,
                                success:true, 
                                message:'data successfully'
                            }); 
              
            }
          });
    
    
        }




    //var hashedPassword = bcrypt.hashSync(req.body.password, 8);


