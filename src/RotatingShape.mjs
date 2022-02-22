export class RotatingShape {
    board;
    shape;
    tmpBoard;

    constructor(Shape) {
        this.shape = Shape.split("\n").length
        this.board = [];

        let array = Shape.split("\n")

        for(let height = 0; height < this.shape; height++) {
            this.board[height] = array[height].trim().split("");
        }

        this.tmpBoard = JSON.parse(JSON.stringify(this.board));
    }

    toString() {
        let board = ""
        for(let height = 0; height < this.shape; height++) {
            for(let width = 0; width < this.shape; width++) {
                board += this.tmpBoard[height][width];
            }
            board += "\n";
        }

        return board
   
    }

    rotateRight() {
        // console.log(this.board)

        let temp  = JSON.parse(JSON.stringify(this.board)); 

        for(let height = 0; height < this.shape; height++) {
            for(let width = 0; width < this.shape; width++) {
                this.tmpBoard[height][width] = temp[this.shape-1-width][height]
            }
        }

        return this

    }

    rotateLeft() {
        console.log(this.board)

        let temp  = JSON.parse(JSON.stringify(this.board)); 

        for(let height = 0; height < this.shape; height++) {
            for(let width = 0; width < this.shape; width++) {
                this.tmpBoard[height][width] = temp[width][this.shape-1-height]
            }
        }

        return this

        
    }

    
}