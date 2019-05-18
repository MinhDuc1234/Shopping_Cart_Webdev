let mongoose = require('mongoose');
let schema = require('./schema/index');

module.exports={
    categories: mongoose.model('categories', schema.categories),
    customers: mongoose.model('customers',schema.customers),
    order_items:mongoose.model('order_items',schema.order_items),
    orders:mongoose.model('orders',schema.orders),
    products:mongoose.model('products',schema.products)

}