export class Board {
  width;
  height;
  board;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = []

    for(let i = 0; i < width; i++) {
      this.board[i] = []
      for(let j = 0; j < height; j++) {
        this.board[i][j] = "."
      }

    }
  }

  toString() {
    let board = ""
    for(let i = 0; i < this.height; i++) {
      for(let j = 0; j < this.width; j++) {
        board += this.board[i][j];
      }
      board += "\n"
    }
    return board;
  }


  // tick() {
  //   this.tick++;
  // // }



}
