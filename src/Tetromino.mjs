import { T_SHAPE } from "./Tetrominos/T_SHAPE.mjs"
import { I_SHAPE } from "./Tetrominos/I_SHAPE.mjs"
import { O_SHAPE } from "./Tetrominos/O_SHAPE.mjs"

export class Tetromino {

    static T_SHAPE = new T_SHAPE(        `.T.
    TTT
    ...`)

    static I_SHAPE = new I_SHAPE(      `.....
    .....
    IIII.
    .....
    .....`)

    static O_SHAPE = new O_SHAPE(
        `.OO
        .OO
        ...`
 
    )


}