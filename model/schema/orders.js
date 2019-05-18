let mongoose = require('mongoose');

let orders = new mongoose.Schema({
  
    customer_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'customers'
    },
    delivery_address:{
        type:String
    },
    payment_type:{
        type:String
    },
    date:{
        type: Date,
        default: Date.now
    },
    status:{
        type:String
    },
    total:{
        type:Number
    }
})

module.exports = orders;