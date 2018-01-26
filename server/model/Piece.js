class Piece {

  constructor(name, symbol, image) {
    this.name = name;
    this.symbol = symbol;
    this.image = image;
  }

  move(toMove) {
    console.log("in Pieces Move");
  }

  getSymbol(){
    return this.symbol;
  }

  getName(){
    return this.name;
  }

  getImage(){
    return this.image;
  }

}

module.exports = Piece;
