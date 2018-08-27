const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const con = require('../database/config');
const db = require('../app/db');



router.post('/getZone', (req, res) => {
    //   console.log(req.body.z);
    if(req.body.z != null){
        db.findUserByZone(req.body.z, function(err, officers) {
            if(err){
                res.json({ status : false, message : 'Sorry No Data Found'});
            }else{
               res.json({ status : true , officers : officers});
                // res.json({ })
            }
        });
    }
});

router.post('/getGrade', (req, res) => {
    //   console.log(req.body.z);
    if(req.body.g != null){
        db.findUserByGrade(req.body.g, function(err, officers) {
            if(err){
                res.json({ status : false, message : 'Sorry No Data Found'});
            }else{
                res.json({ status : true , officers : officers});
            }
        });
    }
});

router.post('/getBatch', (req, res) => {
    //   console.log(req.body.z);
    if(req.body.b != null){
        db.findUserByBatch(req.body.b, function(err, officers) {
            if(err){
                res.json({ status : false, message : 'Sorry No Data Found'});
            }else{
               res.json({ status : true , officers : officers});
            }
        });
    }
});
    
router.post('/getPostedAt', (req, res) => {
    //   console.log(req.body.z);
    if(req.body.p != null){
        db.findUserByPosted(req.body.p, function(err, officers) {
            if(err){
                res.json({ status : false, message : 'Sorry No Data Found'});
            }else{
               res.json({ status : true , officers : officers});
            }
        });
    }
});

router.post('/postUser', (req, res)=>{
      if(req.body.name == '' || req.body.name == undefined || req.body.username == '' || req.body.username == undefined || req.body.password == '' || req.body.password == undefined )  {
        res.json({ status : false , message : 'Please Provide Complete Credentials'});   
      }else{
          db.addNewUser(req.body, function(err, user) {
                if(err){
                    // res.json({ status : false, message : 'Username Already Exists'});
                }if(user){
                    let id = user.insertId;
                    db.getUser(id, function(err, cur_user){
                            if(err){
                                console.log(err);
                            }else{
                                res.json({ status : true , message : 'User Successfully Registered', user : cur_user[0]});
                            }
                    });
                   
                }else{
                    res.json({ status : false , message : 'Username Already Exists'});
                }
          });
      }
});

router.post('/getUser', (req, res)=>{
    // console.log(req.body);
    if(req.body.username == '' || req.body.username == undefined || req.body.password == '' || req.body.password == undefined )  {
      res.json({ status : false , message : 'Please Provide Complete Credentials'});   
    }else{
        db.loginUser(req.body, function(err, user) {
            // console.log(user);
            if(!user.length || err){
                  res.json({ status : false, message : 'User Not Found'});
              }if(user.length){
                //   console.log(user);
                  res.json({ status : true , message : 'User is Authenticated' , user : user[0]});
              }//   }else{
            //     res.json({ status : false , message : 'User Not Found' });
            //   }
        });
    }
});
    
module.exports = router;