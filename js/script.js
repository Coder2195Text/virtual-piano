const piano = new Tone.Synth().toDestination();
var octave = 4
let noteElements = []
 

for (let elm = 0; elm < document.getElementsByTagName("button").length; elm++){
	noteElements.push(document.getElementsByTagName("button")[elm])
	noteElements[elm].addEventListener("mousedown", () => {
		try {
			piano.triggerAttackRelease(noteElements[elm].id.split("note")[0].toUpperCase()+octave, 0.5)}
		catch {
			//reload for occasional fails
			window.location.reload()
		}
	})
}

//addEventListener("keydown")