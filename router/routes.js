const express=require("express")
const postData=require("../controller/register")
const validateData=require("../controller/login")
const logoutData=require("../controller/logout")
const {getData} = require("../controller/dashboard")
const Router=express.Router()

Router.route("/").post(validateData)
Router.route('/logout').post(logoutData)
Router.route('/dashboard').get(getData)
Router.route('/register').post(postData)

module.exports=Router