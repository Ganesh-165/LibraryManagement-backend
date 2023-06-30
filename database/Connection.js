const mongoose =  require('mongoose');

const connection = async ()=>{
   await mongoose.connect('mongodb+srv://ganesh:ganesh2003@cluster0.nixttey.mongodb.net/LibraryManagement?retryWrites=true&w=majority').catch((error)=>console.log(error));
}
module.exports=connection;
