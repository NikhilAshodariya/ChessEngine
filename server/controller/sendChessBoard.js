var ChessBoard;
var SELFGLOBALS;


function loadResource(req, res) {
  SELFGLOBALS = require("../Globals/global.js");
  // ChessBoard = require("../model/chess/ChessBoard.js")
}

function nextHeader(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}

// function getMethods(obj) {
//   var result = [];
//   for (var id in obj) {
//     try {
//       if (typeof(obj[id]) == "function") {
//         result.push(id + ": " + obj[id].toString());
//       }
//     } catch (err) {
//       result.push(id + ": inaccessible");
//     }
//   }
//   return result;
// }

function getChessPosition(req, res) {
  // var Tile = require("../model/chess/Tile.js");
  // var Board = require("../model/chess/Board.js");
  loadResource(req, res);
  // ChessBoard.board
  // console.log(ChessBoard.board);
  var toSendData = {};

  var i = 8;
  var userID = req.session.userId;
  ChessBoard = SELFGLOBALS.getChessBoard(userID);
  for (var i = 8; i > 0; i--) {
    var k = 0;
    for (var j = "a"; k < 8; k++) {
      var intermediateData = i + j;
      // $(intermediateData).val(chessBoard[intermediateData])
      // console.log("------------------");
      // console.log(req.session.chessBoard.board[intermediateData] instanceof Tile);
      // console.log(req.session.chessBoard instanceof Board);
      // console.log(req.session.chessBoard.board['8a']);
      // console.log(isJSON(req.session.chessBoard));
      // console.log("------------------");

      // var chessB = new Board(req.session.chessBoard);




      var piece = ChessBoard.getPiece(intermediateData);
      if (piece != undefined) {
        toSendData[intermediateData] = ChessBoard.getPiece(intermediateData).getSymbol();
      } else {
        toSendData[intermediateData] = undefined;
      }
      j = nextHeader(j);
    }
  }
  // console.log("===========");
  // console.log(ChessBoard);
  // console.log("===========");
  return toSendData;
}

var resources = {
  "getChessPosition": getChessPosition
}
module.exports = resources;
