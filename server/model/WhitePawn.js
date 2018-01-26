var Pawn = require("./Pawn.js");
var Board;
var ChessBoard;
var KilledPieces;

function loadResources() {
  Board = require("./Board.js");
  ChessBoard = require("./ChessBoard.js");
  KilledPieces = require("./KilledPieces.js");
}


class WhitePawn extends Pawn {
  constructor(image) {
    super("WhitePawn", "&#9817;", image);
  }

  move(from, to) {
    // return "valid";
    loadResources();
    if (((Number(from[0]) + 2) == to[0]) && (from[1] == to[1])) {
      if (this.isFirstMove == true) {
        if (ChessBoard.getPiece("" + (Number(from[0]) + 1) + from[1]) == undefined) {
          if (ChessBoard.getPiece(to) != undefined) {
            if (ChessBoard.getPiece(from).getType() == ChessBoard.getPiece(to).getType()) {
              console.log("same party elements can't be killed");
              return "invalid";
            }
            console.log("enemy Killed");
            console.log("Move successful");
            this.isFirstMove = false;
            var kp = ChessBoard.getPiece(to);
            KilledPieces[to] = kp;
            ChessBoard.setPiece(to, ChessBoard.getPiece(from));
            ChessBoard.setPiece(from, undefined);
            return "valid";
          } else {
            ChessBoard.setPiece(to, ChessBoard.getPiece(from));
            ChessBoard.setPiece(from, undefined);
            console.log("Move successful");
            this.isFirstMove = false;
            return "valid";
          }
        } else {
          console.log("Invalid Move since someone in between");
          return "invalid";
        }
      } else {
        console.log("invalid Move since only first move can take 2 steps");
        return "invalid";
      }
    } else if (((Number(from[0]) + 1) == to[0]) && (from[1]) == to[1]) {
      if (ChessBoard.getPiece(to) != undefined) {
        console.log("enemy Killed");
        console.log("Move successful");
        this.isFirstMove = false;
        var kp = ChessBoard.getPiece(to);
        KilledPieces[to] = kp;
        ChessBoard.setPiece(to, ChessBoard.getPiece(from));
        ChessBoard.setPiece(from, undefined);
        return "valid";
      } else {
        ChessBoard.setPiece(to, ChessBoard.getPiece(from));
        ChessBoard.setPiece(from, undefined);
        console.log("Move successful");
        this.isFirstMove = false;
        return "valid";
      }
    } else {
      console.log("Move Unsuccessful learn pawn move direction");
      return "invalid";
    }
  }
}


module.exports = WhitePawn;
