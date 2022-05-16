const mongoose = require('mongoose');
process.env.db;
const UserSchema = mongoose.Schema({
    user:{type:String,require:true},
    job:{type:String,require:true},
    phone:{type:String,require:true}
});
const User = mongoose.model('User_add',UserSchema);
module.exports = User;