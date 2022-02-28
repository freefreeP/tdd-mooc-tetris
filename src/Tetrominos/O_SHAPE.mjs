import { RotatingShape } from "../RotatingShape.mjs"

export class O_SHAPE {
    shapesOfBody;
    currentShape;

constructor(Shape) {
    this.currentShape = 0
    let init = new RotatingShape(
        Shape
    )

    let zero = new RotatingShape(init.toString().slice(0,-1))

    this.shapesOfBody = [
        zero
    ]

}


toString() {
    return this.shapesOfBody[this.currentShape].toString()
}

rotateRight() {
    return this

}

 rotateLeft() {
return this



}

}