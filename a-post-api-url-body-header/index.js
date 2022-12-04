var express=require('express');

var app=express();


//url query
app.post('/',function(request,respond){

    let districtName=request.query.districtName;
    let divisionName=request.query.divisionName;

    respond.send(districtName+" "+divisionName);


});




app.listen(7000,function(){

    console.log("Server run success");
});