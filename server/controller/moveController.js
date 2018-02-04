var ChessBoard = require("../model/ChessBoard.js");

var whichMovePiece = "white";

var obj = function() {
  return {
    movePiece: movePiece
  }
}

function movePiece(from, to) {
  var piece = ChessBoard.board[from].getPiece();
  if (piece == undefined || piece == null) {
    return "invalid";
  } else if (ChessBoard.getPiece(from).getType().toLowerCase() == whichMovePiece) {
    if (whichMovePiece == "white") {
      whichMovePiece = "black";
    } else {
      whichMovePiece = "white";
    }
    return piece.move(from, to);
  } else {
    return "invalid";
  }
}

module.exports = obj();
