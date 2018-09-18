var express = require('express');
var router = express.Router();
/* GET home page. */
router.get("/", function (req, res) {
   var  skills =["MVC", "C#",  "Node JS",    "Python" ,  "IDE visual studio","Mssql"];
   res.render('index', {
       title : "Select technology",
       skills:skills ,
       sobo:""
  });
 });
router.get("/skilla", function (req, res) {
    console.log(pppppppppppp) ;
    var  skills =["MVC", "C#",  "Node JS",    "Python" ,  "IDE visual studio","Mssql"];
     res.render('index', {
        title : "Select technology",
        skills:skills ,
        sobo:""
   });
});

 router.post("/Skill" , function(req, res){
   
        res.render('Skill',{
       skill: req.body.dropDown
   });
});

module.exports = router;
