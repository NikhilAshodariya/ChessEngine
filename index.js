var express = require("express");
var bodyParser = require("body-parser");
var moveController = require("./server/controller/moveController.js");
var ChessBoard = require("./server/model/ChessBoard.js");
var sendChessBoard = require("./server/controller/sendChessBoard.js");

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
    chessBoard:data
  }));
});

chessBoardRouter.get("/move/:from/:to", function(request, response) {
  result = moveController.movePiece(request.params.from, request.params.to);
  response.setHeader("Content-Type", "application/JSON");
  response.send(JSON.stringify({
    moveStatus: result
  }));
});

app.use(express.static("public"));
app.use("/chessBoard", chessBoardRouter);
app.listen(8081, function() {
  console.log("Chess Server listening to 8081");
});
