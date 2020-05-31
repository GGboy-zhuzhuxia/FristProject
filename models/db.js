var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/runoob";
function getStudents(callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("runoob");
        dbo.collection("site"). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            // console.log(result);
            callback(result)  // 把数据传递给控制器
            db.close();
        });
    });
}

// 存储一个学生信息
function save(data,callback){
    // console.log(data)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("runoob");
        dbo.collection("site").insertOne(data, function(err, res) {
            if (err){
                console.log("插入数据失败了~");
                callback("-1"); // -1代表插入失败了
            };
            callback("1"); // 1代表插入数据成功了
            console.log("文档插入成功");
            db.close();
        });
    });
}

exports.getStudents = getStudents;  // 导出
exports.save = save;  // 导出