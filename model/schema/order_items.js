let mongoose = require('mongoose');

let order_items = new mongoose.Schema({
   order_id:{
     type:mongoose.Schema.Types.ObjectId,
     ref:'orders'
   },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products'
    },
    quantity:{
        type:String
    }
   

});

module.exports =  order_items;