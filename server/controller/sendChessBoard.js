var ChessBoard;

function loadResource() {
  ChessBoard = require("../model/chess/ChessBoard.js")
}

function nextHeader(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}

function getChessPosition() {
  loadResource();
  // ChessBoard.board
  // console.log(ChessBoard.board);
  var toSendData = {};

  var i = 8;
  for (var i = 8; i > 0; i--) {
    var k = 0;
    for (var j = "a"; k < 8; k++) {
      var intermediateData = i + j;
      // $(intermediateData).val(chessBoard[intermediateData])
      var piece = ChessBoard.board[intermediateData].getPiece();
      if (piece != undefined) {
        toSendData[intermediateData] = ChessBoard.board[intermediateData].getPiece().getSymbol();
      } else {
        toSendData[intermediateData] = undefined;
      }
      j = nextHeader(j);
    }
  }
  return toSendData;
}

var resources = {
  "getChessPosition": getChessPosition
}
module.exports = resources;
