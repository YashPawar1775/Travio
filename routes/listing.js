const express=require("express");
const router=express.Router({mergeParams:true});
const Listing=require("../models/listing.js");
const wrapAsync=require("../utils/wrapAsync.js");
const {isLoggedIn,validateListing, isOwner,isListing, isCategory, isSearch}=require("../utils/middleware.js");
const multer  = require('multer');
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage });

const listingController=require("../controllers/listings.js");

router.route("/")
    //Index Route
    .get(wrapAsync(listingController.index))
    //Create Route
    .post(isLoggedIn,upload.single('listing[image]'),validateListing,wrapAsync(listingController.createListing));

//Search Route
router.get("/search",isSearch,wrapAsync(listingController.searchListing));

//Filter Route
router.get("/category/:category",isCategory,wrapAsync(listingController.filterByCategory));    

//New Route
router.get("/new",isLoggedIn,listingController.renderNewForm);

router.route("/:id")
    //Show Route 
    .get(isListing,wrapAsync(listingController.showListing))
    //Update Route
    .put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingController.updateListing))
    //Delete Route
    .delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));

//Edit Route 
router.get("/:id/edit",isLoggedIn,isListing,isOwner,wrapAsync(listingController.renderEditForm));

router
module.exports=router;