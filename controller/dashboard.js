const collection = require('../database/Schema')

const getData = async(req,res)=>{
    const {email} = req.body;
    const name = await collection.findOne({email:email}).exec();
    res.json({name:name});
}
module.exports={getData}
