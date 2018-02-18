var User = require("../model/user/userModel.model.js");

var obj = {};

function signUp(req, res) {
  var user = new User();
  user.userName = req.body.userName;
  user.email = req.body.email;
  user.password = req.body.password;
  user.dob = req.body.dob;
  user.save().then((data) => {
    console.log(`User added to the DataBase ${data} Successful`);
  }, (data) => {
    console.log(`User cannot be added to the DataBase --${data}--`);
  });
}

function login(req, res) {
  User.findOne({
    "email": req.body.email
  }).then((data) => {
    console.log(`User Login Successful ${data}`);
    res.redirect("/chessBoard")
    return true;
  }, (data) => {
    console.log(`User Login Unsuccessful ${data}`);
    res.redirect("/Login");
    return false;
  });
}

obj.signUp = signUp;
obj.signIn = login;

module.exports = obj;
