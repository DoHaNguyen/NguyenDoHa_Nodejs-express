const User = require("../model/user_admin");
const md5 = require('md5');
const session = require('express-session');
class adminController{

    async login(req,res){
        req.session.destroy(function(err){
            if (err) throw err;
            res.render('login');
        });
        
    }
    async dashboard(req,res){
        
        res.render('dashboard');
    }
    async dangki(req,res){
        req.session.destroy(function(err){
            if (err) throw err;
            res.render('dangki');
        });

    }
   async guidn(req,res){
       const email1 = req.body.emaildn;
       const password1 = md5(req.body.passdn);
       if(req.body.emaildn==''||req.body.passdn==''){
           res.redirect('/login');
       }else{
       User.findOne(function(err,result){
           if(err){
               console.log(err)
           }
           if(result.password == password1 && result.email == email1){
            req.session.admin = true;
               res.redirect('/dashboard');
           }else{
               res.redirect('/login');
           }
       });
    }   
    }
    async guidk(req,res){
        const user_t = new User({
            email:req.body.emaildk,
            password:md5(req.body.passdk),
            name:req.body.namedk,
            phone:req.body.phonedk,
        });
        if(req.body.emaildk == ''||req.body.passdk == ''||req.body.namedk==''||req.body.phonedk==''){
            res.redirect('/dangki');
        }else{
        user_t.save();
        res.redirect('/login');
    }
    }
   async logout(req,res){
     req.session.destroy(function(err){
         if(err)throw err;
         res.redirect('/login');
     });
     
    }
    
    async kiemduyet(req,res,next){
        if(req.session.admin == true){
            next();
        }else{
            res.redirect('/login');
        }
    }

}
module.exports = new adminController;