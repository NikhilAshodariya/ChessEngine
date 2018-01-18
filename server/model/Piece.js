class Piece {

  constructor(name, symbol, image) {
    this.name = name;
    this.symbol = symbol;
    this.image = image;
  }

  move(toMove) {
    console.log("in Pieces Move");
  }

}

module.exports = Piece;
