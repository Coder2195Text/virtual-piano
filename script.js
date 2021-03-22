var piano = Synth.createInstrument('piano');
var noteElements = []

for (let elm = 0; elm < document.getElementsByTagName("button").length; elm++){
	noteElements.push(document.getElementsByTagName("button")[elm])
	noteElements[elm].addEventListener("click", () => {
		piano.play(noteElements[elm].id.split("note")[0].toUpperCase(), 4, 2)
	})
}