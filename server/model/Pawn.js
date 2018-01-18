var Piece = require("./Piece.js");

class Pawn extends Piece {
  constructor(name, symbol, image) {
    super(name, symbol, image);
    this.isFirstMove = true;
  }

  move(from, to) {
    return "valid";
    console.log("in Pawn from " + from);
    console.log("in Pawn to " + to);

    if (this.isFirstMove == true) {
      if (((from[0] + 2) == to[0]) && (from[1] == to[1])) {
        console.log("Pawn Move successfule");
      }
      this.isFirstMove = false;
    } else {

    }
    // here code of the Pawn move will be coded
  }
}

module.exports = Pawn;
