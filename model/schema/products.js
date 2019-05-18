let mongoose = require('mongoose');
let products = new mongoose.Schema({
 
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'categories'
    },
    name:{
        type:String,
        required: true
    },
    description: {
        required: true,
        type: String
      },
    image:{
        required: true,
        type:String
      },
   
     price:{
         type:Number
     }
});

module.exports = products;