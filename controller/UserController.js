const User = require('../model/user_add');
const axios = require('axios');
const params= require('params');
class userController{
    user(req,res){
        User.find(function(err,data){
            if(err) throw err;
            res.render('User',{data:data});
        })
       
    }
    adduser(req,res){
        res.render('AddUser');
    }
    guiadduser(req,res){
        const user_add = User({
            user:req.body.namenvdk,
            job:req.body.jobnvdk,
            phone:req.body.phonenvdk,
        });
        if(req.body.namenvdk==''||req.body.jobnvdk==''||req.body.phonenvdk==''){
            res.redirect('/adduser');
        }else{
            user_add.save();
            res.redirect('/user');
        }
    }

    UserUpdate(req,res){
       User.findOne({_id:req.params.id},function(err,result){
           if(err) throw err;
           res.render('userupdate',{result:result})
       })
    }
  

}
module.exports = new userController;