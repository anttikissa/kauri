import { clear, block, keys } from './main.js'

function print(...args) {
	console.log(...args)
}

let x = 0
let y = 2
let xvelocity = 1
let yvelocity = 0

export function frame() {
	// Piirto
	clear()
	block(x, y)

	// Näppäimet vasen/oikea
	if (keys.left) {
		xvelocity = -1
		yvelocity = 0
	}
	if (keys.right) {
		xvelocity = 1
		yvelocity = 0
	}
	// Näppäimet ylös/alas
	if (keys.up) {
		yvelocity = -1
		xvelocity = 0
	}
	if (keys.down) {
		yvelocity = 1
		xvelocity = 0
	}

	// Liikkuminen
	x = x + xvelocity
	y = y + yvelocity

	// Menikö yläseinän läpi?
	if (y < 0) {
		y = 13
	}
	// Menikö alaseinän läpi?
	if (y > 13) {
		y = 0
	}
	// Menikö vasemman seinän läpi?
	if (x < 0) {
		x = 13
	}
	// Menikö oikean seinän läpi?
	if (x > 13) {
		x = 0
	}
}

print('Jee tää funktio toimii!')
