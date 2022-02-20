export class Board {
  width;
  height;
  board;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = [this.height]

    for(let i = 0; i < height; i++) {
      this.board[i] = []
      for(let j = 0; j < width; j++) {
        this.board[i][j] = "."
      }
    }
  }

  toString() {
    return this.board
    .map(e => e.reduce((acc,next) => acc + next ) + "\n")
    .reduce((acc,next) => acc + next);
  }

  // tick() {
  //   this.tick++;
  // // }



}
