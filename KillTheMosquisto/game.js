var height = 0
var width = 0
var lives = 1
var timer = 15
var createMosquitoTimer = 1500

var level = window.location.search
level = level.replace('?', '')

if (level === 'normal') {
	createMosquitoTimer = 1500
} else if (level === 'hard') {
	createMosquitoTimer = 1000
} else if (level === 'chucknorris') {
	createMosquitoTimer = 750
}

function adjustGameField() {
	height = window.innerHeight
	width = window.innerWidth

	console.log(width, height)
}

adjustGameField()

var stopwatch = setInterval(function () {

	timer -= 1
	if (timer < 0) {
		clearInterval(stopwatch)
		clearInterval(createMosquito)
		window.location.href = 'victory.html'
	} else {
		document.getElementById('stopwatch').innerHTML = timer
	}

}, 1000)

function randomPosition() {

	//Only one mosquito remains
	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		//console.log('elemento selecionado foi: v' + lives)

		if (lives > 3) {

			window.location.href = 'game_over.html'
		} else {

			document.getElementById('l' + lives).src = "imgs/empty_heart.png"

			lives++

		}

	}


	var positionX = Math.floor(Math.random() * width) - 90
	var positionY = Math.floor(Math.random() * height) - 90

	positionX = positionX < 0 ? 0 : positionX
	positionY = positionY < 0 ? 0 : positionY

	console.log(positionX, positionY)


	//HTML
	var mosquito = document.createElement('img')
	mosquito.src = 'imgs/mosquito.png'
	mosquito.className = randomSize() + ' ' + randomSide()
	mosquito.style.left = positionX + 'px'
	mosquito.style.top = positionY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function () {
		this.remove()
	}

	document.body.appendChild(mosquito)
}

function randomSize() {
	var classe = Math.floor(Math.random() * 3)

	switch (classe) {
		case 0:
			return 'mosquito1'


		case 1:
			return 'mosquito2'


		case 2:
			return 'mosquito3'

	}
}

function randomSide() {
	var classe = Math.floor(Math.random() * 2)

	switch (classe) {
		case 0:
			return 'sideA'
		case 1:
			return 'sideB'
	}
}