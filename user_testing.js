var User = require('./server/models/user.model.js')

//mock up a request object with a body
var req = {};
req.body = {
  email: 'j@d.com',
  age: 55,
  password: 'password'
};

var user = new User(req.body);
console.log(user);
var user = setPassword(req.body.password);
console.log(user);
console.log("JWT", user.generateJwt());
