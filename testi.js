function randint(a, b) {
    return (Math.random() * (b + 1 - a) | 0) + a
}

function print(...s) {
    console.log(...s)
}

function input(s) {
    return prompt(s)
}


// Tästä alkaa varsinainen peli

// Asetetaan muuttujat
vastaus = randint(0, 100)
peli = false

console.log("*".repeat(10))
console.log("Tervetuloa pelaamaan")
console.log("*".repeat(10))

kysymys = input("HALUATKO PELATA?	 (kyllä/ei)")
print("Vastasit: " + kysymys)

if (kysymys === "kyllä") {
	peli = true
	print("Aloitetaan peli!")
	print("Arvaa oikea luku!")
} else {
	print("ei sitte")
}

while (peli === true) {
	arvaus = input("Syötä arvauksesi: ")

	if (arvaus < vastaus) {
		print("Arvaus liian pieni")
	} else if (arvaus > vastaus) {
		print("Arvaus liian iso")
	} else {
		print("Arvasit oikein!")
		peli = false
	}

	if (arvaus === "moikka") {
		print("Moikka!")
		peli = false
	}
}

