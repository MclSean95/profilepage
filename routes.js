var express = require("express");
var User = require("./models/user");
var router = express.Router();

router.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.errors = req.flash("error");
	res.locals.infos = req.flash("info");
	next();
});

router.get("/", function(req, res, next){
	User.find().sort({createdAt: "descending"}).exec(function(err, users){
		if(err)
			return next(err);
		res.render("index", {users:users});
	});
});

router.get("/login", function(req, res, next){
	User.find().sort({createdAt: "descending"}).exec(function(err, users){
		if(err)
			return next(err);
		res.render("login", {users:users});
	});
});

router.post("/login", function(req,res,next){
	if(err)
		return next(err);
	req.locals.curentUser = res.user;
    next();
});

router.get("/signup", function(req, res, next){
	User.find().sort({createdAt: "descending"}).exec(function(err, users){
		if(err)
			return next(err);
		res.render("signup", {users:users});
	});
});

module.exports = router;