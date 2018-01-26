// var ChessBoard = require("../model/ChessBoard.js");
var ChessBoard = require("../model/ChessBoard.js");

var obj = function() {
  return {
    movePiece: movePiece
  }
}

function movePiece(from, to) {
  // console.log("from = " + from);
  // console.log("to = " + to);
  var piece = ChessBoard.board[from].getPiece();
  if (piece == undefined || piece == null) {
    return "invalid";
  } else {
    return piece.move(from, to);
  }
  // var piece = ChessBoard.board[from].getPiece().move(from,to);

}
module.exports = obj();
