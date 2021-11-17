var express = require('Express');
var router = express.Router();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Person = require('../models/Person').Person;



var jsonParser = bodyParser.json();



router.post('/', jsonParser,function(req,response) {
   var personInfo = req.body; //Get the parsed information
   
   console.log(personInfo.name);

   var error;

   if(!personInfo.name || !personInfo.password){
      console.log("Invalid request");
      response.json(JSON.stringify({error: true,message:"Invalid request"}));
   } else {
      var newPerson = new Person({
         name: personInfo.name,
         password: personInfo.password
      });
		Person.countDocuments({name: newPerson.name},function(err,count){
         if(count>0){
            console.log("Already exists");
            response.json(JSON.stringify({error: true,message:"User with this name already exists"}));
         }else{
            newPerson.save(function(err, Person){
               if(err){
                  console.log("Database error");
                  response.json(JSON.stringify({error: true,message:"Database error"}));
               }
               else{
                  console.log("New person added");
                  response.json(JSON.stringify({error: false,message:"Signed Up!"}));
               }
            });
         }
      });
   }
})

module.exports = router;
