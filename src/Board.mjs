export class Board {
  width;
  height;
  board;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = [this.height]

    for(let height = 0; height < this.height; height++) {
      this.board[height] = []
      for(let width = 0 ; width < this.width ; width++) {
        this.board[height][width] = "."
      }
    }
  }

  toString() {
    // return this.board.reverse()
    // .map(e => e.reduce((acc,next) => acc + next ) + "\n")
    // .reduce((acc,next) => acc + next);

    let board = ""
    this.board = this.board.reverse();

    for(let height = 0; height < this.height; height++) {
      for(let width = 0 ; width < this.width ; width++) {
        board += this.board[height][width]
      }
      board += "\n";
    }
    this.board = this.board.reverse();
    return board;
  }

  drop(Block) {
    for(let height = 1; height < this.height; height++) {
      for(let width = 0; width < this.width; width++) {
        if(this.board[height][width] === "X" || this.board[height][width] === "Y") {
          throw new Error('already falling');
        }
      }
    }

        this.board[this.height-1][1] = Block.color
        // console.log(this.board.toString() + "\n")
        // console.log(this.board)
    

  }

  tick() {

    for(let width = 0; width < this.width; width++) {
      for(let height = 0; height < this.height-1; height++) {
        this.board[height][width] = this.board[height+1][width];
      }
    }

    for(let width = 0; width < this.width; width++) {
      this.board[this.height-1][width] = ".";
    }

    // console.log(this.board.toString() + "\n")
    // console.log(this.board)



  }
}
