const mongoose =  require('mongoose');

const connection = async ()=>{
   await mongoose.connect('mongodb+srv://ganesh:ganesh2003@cluster0.nixttey.mongodb.net/LibraryManagament?retryWrites=true&w=majority').catch((error)=>console.log(error));
}
module.exports=connection;
