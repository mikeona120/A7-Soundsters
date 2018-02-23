var data = require('../data.json');

exports.view = function(req, res){
  
  	var newUser = 
		{
			name: req.query.name
		};
	data.users.push(newUser);
 
  console.log(newUser);
  res.render('index',data);
  console.log(data.users);

};
