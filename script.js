var piano = new Tone.Synth().toDestination();
var noteElements = []

for (let elm = 0; elm < document.getElementsByTagName("button").length; elm++){
	noteElements.push(document.getElementsByTagName("button")[elm])
	noteElements[elm].addEventListener("click", () => {
		piano.triggerAttackRelease(noteElements[elm].id.split("note")[0].toUpperCase()+ 4, 0.5)
	})
}