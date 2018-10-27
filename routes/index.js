/*esversion=6 */
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get("/", function (req, res) {
<<<<<<< HEAD
       var  skills =["MVC", "C#", "mmm","mlll","moo","muuu" ,"mdd","mkkkk","Node  JS", "mkyy" ,  "Python" ,  "IDE visual studio","Mssql"];
=======
       var  skills =["MVC", "C#", "mmm","mlllkkkkkkkkkkkkkkkkkk","moo","muuu" ,"mdd","mkkkk","Node  JS", "mkyy" ,  "Python" ,  "IDE visual studio","Mssql"];
>>>>>>> dd10836f9c555b2ce27b7307f1c2eb0d5defff67
       res.render('index', {
       title : "Select technology",
       skills:skills
   });
  });
 
 router.post("/Skill" , function(req, res){
       console.log(req.body);
       res.render('Skill',{
       skill: req.body.zaftok
   });
});

module.exports = router;