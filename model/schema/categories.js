let mongoose = require('mongoose');
let categories = new mongoose.Schema({
 
    name:{
        type:String,
        require:true
    },
    description: {
        required: true,
        type: String
      },
      image:{
          type:String
      }
});

module.exports = categories;