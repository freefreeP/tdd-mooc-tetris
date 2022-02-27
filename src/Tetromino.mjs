import { RotatingShape } from "./RotatingShape.mjs"

export class Tetromino {
    shapesOfBody;
    currentShape;
    lastMoveDirection;

    static T_SHAPE = new Tetromino()


constructor() {
    this.currentShape = 0
    this.lastMoveDirection = 1
    let init = new RotatingShape(
        `.T.
        TTT
        ...`
    )

    let zero = new RotatingShape(init.toString().slice(0,-1))
    let first = new RotatingShape(init.rotateRight().toString().slice(0,-1))
    let second = new RotatingShape(init.rotateLeft().toString().slice(0,-1))
    let third = new RotatingShape((new RotatingShape(init.rotateRight().toString().slice(0,-1))).rotateRight().toString().slice(0,-1))

    this.shapesOfBody = [
        zero, // 0
        first, // 1
        second, // 2
        third // 3

    ]






}


toString() {
    return this.shapesOfBody[this.currentShape].toString()
}

rotateRight() {
        if(this.lastMoveDirection == 1) {
            if (this.currentShape == 1) {
                this.currentShape = 3
            } else if(this.currentShape == 0) {
                this.currentShape = 1
            } else if(this.currentShape == 3) {
                this.currentShape = 2
            } else if(this.currentShape == 2) {
                this.currentShape = 0
            }
        } 


    return this

}

 rotateLeft() {
    if(this.lastMoveDirection == -1) {
        if (this.currentShape == 1) {
            this.currentShape = 0
        } else if(this.currentShape == 0) {
            this.currentShape = 2
        } else if(this.currentShape == 3) {
            this.currentShape = 1
        } else if(this.currentShape == 2) {
            this.currentShape = 3
        }
    } else {
        this.currentShape = 2
        this.lastMoveDirection = -1
    }


return this



}

}