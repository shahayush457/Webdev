const express = require('express');
const app = express();
const path =require("path");
const bodyParser=require("body-parser");
const mongoose = require('mongoose');
const usermodel = require('./model.js');

mongoose.connect("mongodb+srv://Ayush:Ayush@cluster0-faxnj.azure.mongodb.net/usersdb?retryWrites=true",
(err)=>{
    if(err){
        console.log(err);
    }
    else {
        console.log("DB connected");
    }
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const port =5000;

app.post('/save', (req, res ,next) =>{
    console.log(req.body);

    // var temp = mongoose.model('users');
    // var newUser = new temp({
    //     email: req.body.email,
    //     password: req.body.password
    // });
     const newUser = new usermodel({
         email: req.body.email,
         password: req.body.password
     });
    newUser
      .save()
      .then((result)=>{
          console.log(result);
          res.status(200).json({
            message: "User Saved Successfully",
            status: true
        });
      })
      .catch((err) => {
          console.log(err);
          throw err;
      });

});



// app.get('/', (req, res ,next)=>{
//     console.log("I am inside");
// });
// app.post('/save', (req ,res ,next)=>{
//     console.log(req.body);
//     console.log("Hello world");
//     res.send("Something something");
// });

     app.listen(port, function(){
      console.log("Server running at port :" +port);
     });