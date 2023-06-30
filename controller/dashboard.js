const collection = require('../database/Schema')

const getData = async(req,res)=>{
    const {email} = req.session;
    console.log(email);
    const name = await collection.findOne({email:email}).exec();
    res.json({name:name});
}
module.exports={getData}
