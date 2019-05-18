let mongoose = require('mongoose');

let customers = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    address:{
        type:String
    },

});

module.exports = customers;