// to connect db with node

const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/bank",()=>{
    console.log("mongodb connected succesffully");
}) 

// create a model 

 const Account = mongoose.model('Account',{
    
        acno: Number,
        password: Number,
        username: String,
        balane: Number,
        transaction:[]
      
 })

  module.exports = {
    Account
 }