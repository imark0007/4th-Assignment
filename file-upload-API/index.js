var express=require('express');
var multer=require('multer');

var app=express();


var storage=multer.diskStorage({
    destination:function (request,file,callBack) {
        callBack(null,'./fileUpload');
    },
    filename:function (request,file,callBack) {
        callBack(null,file.originalname);
    }
});

var upload=multer({storage:storage}).single('myFile');

app.post('/',function (request,respond) {
    upload(request,respond,function (error) {
        if(error){
            respond.send("File Upload Failed");
        }
        else{
            respond.send("File Upload Success");
        }
    });
});


app.listen(6000,function () {
    console.log("Server Run Success");
});
