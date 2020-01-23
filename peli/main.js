console.log('moi')

let c = document.querySelector('canvas')

let context = c.getContext('2d')

export function block(x, y) {
    context.fillRect(10 + x * 100, 10 + y * 100, 90, 90)
}

import { frame } from './game.js'

frame()

    