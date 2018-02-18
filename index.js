var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var moveController = require("./server/controller/moveController.js");
var ChessBoard = require("./server/model/chess/ChessBoard.js");
var sendChessBoard = require("./server/controller/sendChessBoard.js");
var userLoginController = require("./server/controller/LoginController.js");


var PORT = 8081;
var URL = `mongodb://127.0.0.1:27017/Chess`;

// Connecting to DataBase
mongoose.connect(URL);

var app = express();

var logger = function(request, response, next) {
  console.log(`Time : ${new Date().toLocaleString()}\nRequesting Page : ${request.path}`);
  next();
}

app.use(logger);
app.use(bodyParser.urlencoded({
  extended: true
}));

chessBoardRouter = express.Router();
chessBoardRouter.get("/", function(request, response) {
  response.sendFile(__dirname + "/public/html/table.html");
});

chessBoardRouter.get("/getChessBoard", function(request, response) {
  var data = sendChessBoard.getChessPosition();
  response.setHeader("Content-Type", "application/JSON");
  response.send(JSON.stringify({
    chessBoard: data
  }));
});

chessBoardRouter.get("/getWhichPlayerMove", function(request, response) {
  var data = moveController.getWhichMovePiece();
  response.setHeader("Content-Type", "application/JSON");
  response.send(JSON.stringify({
    whichPlayerMove: data
  }))
});

chessBoardRouter.get("/move/:from/:to", function(request, response) {
  result = moveController.movePiece(request.params.from, request.params.to);
  response.setHeader("Content-Type", "application/JSON");
  response.send(JSON.stringify({
    moveStatus: result
  }));
});

Login = express.Router();
Login.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/html/Login.html");
});

Login.post("/signUp", (req, res) => {
  userLoginController.signUp(req, res);
  res.redirect("/Login");
});

Login.post("/signIn", (req, res) => {
  userLoginController.signIn(req,res);
});

app.use(express.static("public"));
app.use("/chessBoard", chessBoardRouter);
app.use("/Login", Login);
app.listen(8081, function() {
  console.log("Chess Server listening to 8081");
});
