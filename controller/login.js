const mongoose=require("mongoose")
const collection = require("../database/Schema")

const validateData= async(req,res)=>{
    try{
        const {email,password,type}=req.body
        const userdata=await collection.findOne({email:email}).exec();
        res.setHeader({'Access-Control-Allow-Origin'},{true});
        if(!userdata){
            return res.status(200).json({success:false, message:'use Emailid:admin@gmail.com Password:12345'})
        }
        if(userdata){
            if(userdata.password===password){
                req.session.email = email;
                res.json({success:true, type:userdata.type});
            }else{
                res.status(200).json({success:false , message:'use Emailid:admin@gmail.com Password:12345'})
            }
        }
    }
    catch(error){
        console.log(error);
    }
}

module.exports=validateData
