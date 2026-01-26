const express=require("express");
const router=express.Router({mergeParams:true});
const User=require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport=require("passport");
const { saveRedirectUrl } = require("../utils/middleware.js");

const userController=require("../controllers/users.js");

router.route("/signup")
    //Signup Render Route
    .get(userController.renderSignup)
    //Signup Route
    .post(wrapAsync(userController.signup));

router.route("/login")
    //Login Render Route
    .get(userController.renderLogin)
    //Login Route
    .post(saveRedirectUrl,passport.authenticate('local', { failureRedirect: '/login' ,failureFlash:true }),userController.login);

//Logout Route
router.get("/logout",userController.logout);

module.exports=router;