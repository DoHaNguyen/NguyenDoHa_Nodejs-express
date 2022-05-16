class FrontendController{
    home(req,res){
        res.render('./frontend/home');
    }
}
module.exports = new FrontendController;