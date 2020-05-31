let db = require("../models/db")
exports.showStudentList = (req,res)=>{
    db.getStudents(function (arr) {
        res.render("index",{"arr":arr})
    })
}
exports.add = (req,res) =>{
    res.render("add")
}

exports.doAdd = (req,res) =>{
    db.save(req.body,function(info){
        res.send(info)
    })
}