var express = require('express');
var router = express.Router();

// Get Homepage

router.get('/', function(req, res){
	res.render('landingpage', {layout: false});
	// res.render('index', function(err, result) {
	//     // render on success
	//     if (!err) {
	//         res.send(result);
	//     }
	//     // render or error
	//     else {
	//         res.end('An error occurred');
	//         console.log(err);
	//     };
	// });
});

router.get('/bot', function(req, res){

	res.render('bot', {layout: 'other'});
});

function ensureAuthenticated(req, res, next){
	// if(req.isAuthenticated()){
	// 	return next();
	// } else {
	// 	//req.flash('error_msg','You are not logged in');
	// 	res.redirect('/users/login');
	// }
}

module.exports = router;