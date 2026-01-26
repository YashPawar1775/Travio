const express=require("express");
const router=express.Router({mergeParams:true});
const Review=require("../models/review.js");
const wrapAsync=require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js");
const {validateReview, isLoggedIn ,isAuthor}=require("../utils/middleware.js");

const reviewController=require("../controllers/reviews.js");

//Create Route
router.post("/",isLoggedIn,validateReview, wrapAsync(reviewController.createReview));

//Delete Route
router.delete("/:reviewId",isLoggedIn, isAuthor,wrapAsync(reviewController.destroyReview));

module.exports=router;