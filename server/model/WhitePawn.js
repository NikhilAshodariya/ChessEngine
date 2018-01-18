var Pawn = require("./Pawn.js");

class WhitePawn extends Pawn{
  constructor(image) {
    super("WhitePawn", "&#9817;", image);
  }
}


module.exports = WhitePawn;
