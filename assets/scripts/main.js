// main.js

var volSlider = document.getElementById('volume-slider')
var volInput = document.getElementById('volume-number')
var volImage = document.getElementById('volume-image')
var soundImage = document.getElementById('sound-image')
var soundAirHorn = document.getElementById('radio-air-horn')
var soundCarHorn = document.getElementById('radio-car-horn')
var soundPartyHorn = document.getElementById('radio-party-horn')
var sound = document.getElementById('horn-sound')
var button = document.getElementById('honk-btn')

document.addEventListener("DOMContentLoaded", function(){
    button.type = "button"
});

volInput.oninput = function() {
	volSlider.value = setVolume(volInput.value)

};

volSlider.oninput = function() {
	volInput.value = setVolume(volSlider.value)
}

var setVolume = function(level) {
	var src = "./assets/media/icons/volume-level-"
	level = (level > 100) ? 100 : level
	level = (level < 0) ? 0 : level
	if(level >= 67) {
		src += 3
	} else if(level >= 34) {
		src += 2
	} else if(level >= 1) {
		src += 1
	} else {
		src += 0
	}
	src += ".svg"
	volImage.src = src
	sound.volume = level/100
	if(level == 0) button.disabled = true;
	else button.disabled = false;
	return level
}

var setSound = function() {
	var img = "./assets/media/images/"
	var src = "./assets/media/audio/"
	if(soundCarHorn.checked) {
		img += "car.svg"
		src += "car-horn.mp3"
	} else if(soundAirHorn.checked) {
		img += "air-horn.svg"
		src += "air-horn.mp3"
	} else if(soundPartyHorn.checked) {
		img += "party-horn.svg"
		src += "party-horn.mp3"
	}

	sound.src = src
	soundImage.src = img
}

soundAirHorn.oninput = setSound
soundCarHorn.oninput = setSound
soundPartyHorn.oninput = setSound

button.onclick = function() {
	console.log(sound)
	sound.play()
}