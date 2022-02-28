import { RotatingShape } from "../RotatingShape.mjs"

export class I_SHAPE {
    shapesOfBody;
    currentShape;
    lastMoveDirection;

constructor(Shape) {
    this.currentShape = 0
    let init = new RotatingShape(
        Shape
    )

    let zero = new RotatingShape(init.toString().slice(0,-1))
    let first = new RotatingShape(init.rotateRight().toString().slice(0,-1))

    this.shapesOfBody = [
        zero, // 0
        first // 1
    ]

}


toString() {
    return this.shapesOfBody[this.currentShape%2].toString()
}

rotateRight() {

    this.currentShape += 1


    return this

}

 rotateLeft() {
    this.currentShape += 2



return this



}

}