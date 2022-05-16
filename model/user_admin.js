const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test',{
    useNewUrlParser:true,
});
const UserSchema =new mongoose.Schema({
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    name:{type:String,require:true},
    phone:{type:String,require:true}
})
const User = mongoose.model('User',UserSchema);

module.exports = User;