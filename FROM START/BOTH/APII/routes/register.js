const express=require("express");
const router=express.Router();
const multer=require("multer");
const {connection}=require("../database/sql")
var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/images");
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname );
    }
})

var upload=multer({storage});




router.post('/',upload.single("profileimage"),(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const file=req.file.filename;
    

    const data={
        name:name,
        email:email,
        password:password,
        profileimage:file,
    }

    connection.query('INSERT into t SET ?',data,(err,res)=>{
        if (err) throw err;
        else{
            console.log('data stored');
        }
    })



})
module.exports=router;