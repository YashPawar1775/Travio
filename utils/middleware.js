const Listing=require("../models/listing");
const ExpressError=require("../utils/ExpressError.js");
const {listingSchema,reviewSchema}=require("../schema.js");
const Review = require("../models/review.js");

module.exports.isLoggedIn=(req,res,next)=>{
    if (!req.isAuthenticated()) {
        let original = req.originalUrl;
        // Pattern: /listings/:id/reviews/:reviewID?_method=DELETE
        const logic = /^\/listings\/([^/]+)\/reviews\/([^/?]+)\?_method=DELETE$/;
        const match = original.match(logic);
        if (match) {
            const listingId = match[1];
            req.session.redirectUrl=(`/listings/${listingId}`);
        } 
        else {
            req.session.redirectUrl = original;
        }
        req.flash("error","You must be logged in to access this feature!");
        return res.redirect("/login");
    }
    next();
}; 

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner=async(req,res,next)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error","You don't have access to this feature"); 
        return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.validateListing=(req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(","); 
        throw new ExpressError (400, errMsg);
    }
    else{
        next();
    }
};

module.exports.validateReview=(req,res,next)=>{
    let {error} = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(","); 
        throw new ExpressError (400, errMsg);
    }
    else{
        next();
    }
};

module.exports.isAuthor=async(req,res,next)=>{
    let {id, reviewId}=req.params;
    let review=await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error","You don't have access to this feature"); 
        return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.isListing=async(req,res,next)=>{
    const {id}=req.params;
    let place=await Listing.findById(id);
    if(!place){
        req.flash("error","Listing not found!");
        return res.redirect("/listings");
    }
    next();
};

module.exports.isCategory=async(req,res,next)=>{
    const {category}=req.params;
    const listings=await Listing.find({category}); 
    if (listings.length===0) {
        req.flash("error", `No listings found for ${category}`);
        return res.redirect("/listings");
    }
    next();
};

module.exports.isSearch=async(req,res,next)=>{
    const { q } = req.query;
    const listings = await Listing.find({
        $or: [
            { title:    { $regex: q, $options: "i" } },
            { location: { $regex: q, $options: "i" } },
            { country:  { $regex: q, $options: "i" } }
        ]
    });
    if (listings.length === 0) {
        req.flash("error", `No listings found for ${q}`);
        return res.redirect("/listings");
    }
    next();
}