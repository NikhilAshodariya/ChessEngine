var ChessBoard = require("../model/ChessBoard.js");

var whichMovePiece = "white";

var obj = function() {
  return {
    movePiece: movePiece,
    getWhichMovePiece: getWhichMovePiece
  }
}

function getWhichMovePiece(){
  return whichMovePiece;
}

function movePiece(from, to) {
  var piece = ChessBoard.board[from].getPiece();
  if (piece == undefined || piece == null) {
    return "invalid";
  } else if (ChessBoard.getPiece(from).getType().toLowerCase() == whichMovePiece) {
    var output = piece.move(from, to);
    if (output == "valid") {
      if (whichMovePiece == "white") {
        whichMovePiece = "black";
      } else {
        whichMovePiece = "white";
      }
    }
    return output;
  } else {
    return "invalid";
  }
}

module.exports = obj();
