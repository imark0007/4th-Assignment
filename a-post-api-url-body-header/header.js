var express=require('express');

var app=express();


//header properties
app.post('/',function(request,respond){

    let loginName=request.header("loginName");
    let loginPass=request.header("loginPass");

    respond.send("loginName:" +loginName+ "loginPass:" +loginPass);


});



app.listen(8000,function(){

    console.log("Server run success");
});