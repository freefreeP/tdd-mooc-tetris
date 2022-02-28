export class Board {
  width;
  height;
  board;
  tickCounter;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = [this.height]
    this.tickCounter = 0;

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
    this.tickCounter = 0;

    
    let spaceTheBlockNeeds;
    if(Block.color) {
      spaceTheBlockNeeds = 1
    } else {
      spaceTheBlockNeeds = 2
    }
    
    
    for(let height = this.height-spaceTheBlockNeeds-1; height < this.height; height++) {
      for(let width = 0; width < this.width; width++) {
        if(this.board[height][width] != ".") {
          throw new Error('already falling');
        }
      }
    }
        if(Block.color) {
          this.board[this.height-1][1] = Block.color    
        } else {
          let blockWidth = Block.shapesOfBody[0].board[0].length
          let middlePointToDropBlock = Math.floor( (this.width -1 -blockWidth) / 2) 
          for(let height = 1; height < spaceTheBlockNeeds+1; height++) {
            for(let width = 0; width < blockWidth; width ++) {
              this.board[this.height-height][width+middlePointToDropBlock] = 
              Block.shapesOfBody[0].board[height-1][width]
            }
          }
        }

  }

  tick() {
    this.tickCounter += 1;

    for(let width = 0; width < this.width; width++) {
      for(let height = 0; height < this.height-1; height++) {
        
        if(this.board[height][width] == ".") {
          this.board[height][width] = this.board[height+1][width];
          this.board[height+1][width] = ".";
        } 
      }
    }

    for(let width = 0; width < this.width; width++) {
      this.board[this.height-1][width] = ".";
    }
  }

  hasFalling() {
    
    if(this.tickCounter % this.height == 0) {
      return false;
    }

    for(let width = 0; width < this.width; width++) {
      for(let i = 0; i<=this.height-this.tickCounter; i++) {
        if(this.board[0][width] == ".") {
          break;
        }
        if(this.board[i][width] == ".") {
          return true;
        }
      }
    }

      return false;
  }
}
