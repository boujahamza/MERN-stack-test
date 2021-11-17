var express = require('Express');
var router = express.Router();

var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

var Person = require('../models/Person').Person;



var jsonParser = bodyParser.json();

router.post('/', jsonParser,function(req,response) {
   var personInfo = req.body; //Get the parsed information

   if(!personInfo.name || !personInfo.password){
      console.log("Sorry, you provided wrong info");
      response.json(JSON.stringify({error: true,message:"Invalid request"}));
   } else {
      var newPerson = new Person({
         name: personInfo.name,
         password: personInfo.password
      });
      Person.findOne({name: newPerson.name},function(err,obj){
            if(obj === null){
               response.json(JSON.stringify({error:true,message:"Invalid username or password"}));
            }else{
               if(newPerson.password === obj.password){
                  jwt.sign(
                     {name: personInfo.name},
                     "my-32-character-ultra-secure-and-ultra-long-secret",
                  {expiresIn: 86400 /*1day*/},
                     (err, token) => {
                        if (err){
                           response.json(JSON.stringify({error:true,message:err.toString()}));
                        }else{
                           response.json(JSON.stringify({error:false,message:"Login success",token:"Bearer "+token}));
                        }
                     }
                  )
               }else{
                  response.json(JSON.stringify({error:true,message:"Invalid username or password"}));
               }
            }
         }
      );
   }
})

module.exports = router;
