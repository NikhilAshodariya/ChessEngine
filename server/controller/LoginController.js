var User = require("../model/user/userModel.model.js");
var Board = require("../model/chess/Board.js")
var SELFGLOBALS = require("../Globals/global.js");

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
    email: req.body.email,
    password: req.body.password
  }).then((data) => {
    if (data == null) {
      console.log(`User Login Unsuccessful ${data}`);
      res.redirect("/Login");
    } else {
      req.session.email = req.body.email;
      req.session.userId = SELFGLOBALS.incrementUserCount();
      SELFGLOBALS.addChessBoard(new Board());
      // console.log("------------------");
      // console.log(req.session.chessBoard.board[intermediateData] instanceof Tile);
      // console.log(getMethods(ChessBoard));
      // console.log("------------------");
      req.session.whichPlayerMove = "white";
      console.log(`User Login Successful ${data}`);
      res.redirect("/chessBoard")
    }
  });
}

obj.signUp = signUp;
obj.signIn = login;

module.exports = obj;
