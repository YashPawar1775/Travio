const Listing=require("../models/listing");
const maptilerClient = require('@maptiler/client');
const mapToken=process.env.MAP_TOKEN;
maptilerClient.config.apiKey =mapToken;

module.exports.index=async(req,res,next)=>{
    const listings=await Listing.find({});
    res.render("listings/index.ejs",{listings});
};

module.exports.filterByCategory= async (req,res,next) =>{
    const {category}=req.params;
    const listings=await Listing.find({category});
    res.render("listings/index.ejs", {listings});
};

module.exports.searchListing=async(req,res,next)=>{
    const { q } = req.query;
    const listings = await Listing.find({
        $or: [
            { title:    { $regex: q, $options: "i" } },
            { location: { $regex: q, $options: "i" } },
            { country:  { $regex: q, $options: "i" } }
        ]
    });
    res.render("listings/index.ejs", { listings });
}

module.exports.renderNewForm=(req,res)=>{
    res.render("listings/new.ejs");
};

module.exports.createListing=async(req,res,next)=>{
    const result = await maptilerClient.geocoding.forward(req.body.listing.location,{limit:1});   
    let url=req.file.path;
    let filename=req.file.filename;
    const newlisting=new Listing(req.body.listing);
    newlisting.owner=req.user._id;
    newlisting.image={url,filename};
    newlisting.geometry=result.features[0].geometry
    await newlisting.save();
    req.flash("success","New Listing Created!");
    res.redirect("/listings"); 
};

module.exports.showListing=async(req,res,next)=>{
    const {id}=req.params;
    let listing=await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    res.render("listings/show.ejs",{listing,maptilerKey: process.env.MAP_TOKEN}); 
};

module.exports.renderEditForm=async(req,res,next)=>{
    const {id}=req.params;
    let listing=await Listing.findById(id);
    let url=listing.image.url;
    url.replace("/upload","/upload/h_300,w_250"); 
    res.render("listings/edit.ejs",{listing,url});  
};

module.exports.updateListing=async(req,res,next)=>{
    let {id} = req.params;
    let updatelisting=await Listing.findByIdAndUpdate (id, req.body.listing,{new:true,runValidators:true});
    if(typeof req.file!=="undefined"){
        let url=req.file.path;
        let filename=req.file.filename;
        updatelisting.image={url,filename};
        let imageedit=await updatelisting.save();
    }
    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing=async(req,res,next)=>{
    let {id} = req.params;
    let deleted=await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
};