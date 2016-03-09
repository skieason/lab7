var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('weather.html', { root:  'public' });
});

router.get('/getcity',function(req,res,next) {

	var myRe = new RegExp("^" + req.query.q);

	fs.readFile(__dirname + '/cities.dat.txt',function(err,data) {
	    if(err) throw err;
	    var cities = data.toString().split("\n");
        var jsonresult = [];
	    for(var i = 0; i < cities.length; i++) {
	      var result = cities[i].search(myRe); 
          if(result != -1) {
       		jsonresult.push({city:cities[i]});
          } 
	    }
	    res.status(200).json(jsonresult);
	  });


  //   console.log("In getcity route");
  //   console.log(1);
  //   var fs = require('fs');
  //   fs.readFile(__dirname + '/cities.dat.txt',function(err,data) {
	 //    if(err) throw err;
	 //    var cities = data.toString().split("\n");
	 //    for(var i = 0; i < cities.length; i++) {
	 //      	console.log(cities[i]);
	 //      	console.log(req.query.q);
	 //      	console.log(2);
	 //      	var myRe = new RegExp("^" + req.query.q);
	 //  		console.log(myRe);
	 //  		console.log(3);

	 //    	var result = cities[i].search(myRe);
		//   	if(result != -1) {
		//     	console.log(cities[i]);
		//     	console.log(4);
		//   	}

		//   	var jsonresult = [];
		//   	console.log('number of cities' + cities.length);
	 //        for(var i = 0; i < cities.length; i++) {
	 //          	var result = cities[i].search(myRe); 
	 //          	if(result != -1) {
	 //           		console.log(cities[i]);
	 //           		console.log(5);
	 //           		jsonresult.push({city:cities[i]});
	 //          	} 
	 //        }   
	 //        console.log(jsonresult);
	 //        console.log(6);
	 //        res.status(200).json(jsonresult);
		// }
  //   });
});

module.exports = router;


// var myRe = new RegExp("^", + req.query.q);

	// fs.readFile(__dirname + '/cities.dat.txt', function (err,data) {
	// 	if (err) throw err;
	// 	var jsonresult = [];
	// 	var cities = data.toString().split("\n");
	// 	for (var i = 0; i < cities.length; i++) {
	// 		var result = cities[i].search(myRe);
	// 		if (result != -1) {
	// 			jsonresult.push({city: cities[i]});
	// 		}
	// 	}
	// 	res.status(200).json(jsonresult);
	// })
