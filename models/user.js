const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name:{
        type:String,
        required:true
    }
});

UserSchema.plugin(passportLocalMongoose);  //adding password and username field to schema
var User=mongoose.model('User',UserSchema);
module.exports =User;