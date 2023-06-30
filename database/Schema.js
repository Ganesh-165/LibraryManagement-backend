const mongoose = require('mongoose');

const register = new  mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobileno:{
        type:String,
        required:true
    },type:{
        type:String,
        required:true
    }
})
const collection = mongoose.model('register',register);
module.exports = collection