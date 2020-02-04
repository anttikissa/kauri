let c = document.querySelector('canvas')
let context = c.getContext('2d')

export function clear() {
    context.clearRect(0, 0, 1410, 1410)
}

export function block(x, y) {
    context.fillRect(10 + x * 100, 10 + y * 100, 90, 90)
}

export let keys = {
    left: false,
    right: false,
    up: false,
    down: false,
}

import { frame } from './game.js'

window.addEventListener('keydown', (ev) => {
    if (ev.keyCode === 37) {
        keys.left = true
    }
    if (ev.keyCode === 39) {
        keys.right = true
    }
    if (ev.keyCode === 38) {
        keys.up = true
    }
    if (ev.keyCode === 40) {
        keys.down = true
    }
})

let SPEED = 6
setInterval(function() {
    frame()

    for (let key in keys) {
        keys[key] = false
    }

}, 1000 / 6)

frame()
