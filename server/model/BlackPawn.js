var Pawn = require("./Pawn.js");

class BlackPawn extends Pawn{
  constructor(image) {
    super("BlackPawn", "&#9823;", image);
  }
}

module.exports = BlackPawn;
