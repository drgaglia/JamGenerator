// TODO: this currently takes in ONE scale 
// e.g. [ 2, 2, 1, 2, 2, 2, 1 ]
// Possiby refactor to intake the entire parent?

class Key {
    constructor ( note, scale ) {
        this.keyCenter = note;
        this.keyLetter = this.keyCenter.letter;
        this.keyAccidental = this.keyCenter.accidental;
        this.scale = scale;
    }

    generateNotes () {
        let len = this.scale.length; 
        for (let i = 0; i < len; i++ ) {

        }
    }

    checkHasNote ( note ) {
        for ( let i = 0; i < this.notes.length; i++ ) {
            
        }
    }
}

function getNotes ( tonal, scale ) {
	let scaleNotes = [];
	let currNote = tonal.name + tonal.accidental;
	scaleNotes.push ( CHROMATIC_SCALE [ currNote ] );
	for ( let i = 0; i < scale.length - 1; i++ ) { 
		currNote = ( currNote + scale [ i ] ) % CHROMATIC_LENGTH;
		scaleNotes.push ( CHROMATIC_SCALE [ currNote ] );
    }
	console.log ( scaleNotes );
}


/*
 * This function works. But it is hideous (see: if statement). Additionally, this brute forces
 * 'correctness' for natural whole-steps (basically saying "if the note is Cb, Fb, B#, or E#,
 * don't create a scale for it.") Again, it _works_, but I know there's got to be a more
 * built-in/architectural solution to this (i.e. the logic for why you can't build a scale on
 * these notes should pop out of the structure of the notes themselves).
 * 
 * I haven't figured out this solution yet, so for now it stays.
 */
function getAllScalesForTesting ( scale ) {
    let count = 0;
    for ( let i = 0; i < CHROMATIC_SCALE.length; i++ ) {
        for ( let j = 0; j < Object.entries ( ACCIDENTALS ).length; j++ ) {
            let enharm = CHROMATIC_SCALE [ i ].enharmonics [ j ];
            if ( enharm
                && enharm.accidental !== ACCIDENTALS.X
                && enharm.accidental !== ACCIDENTALS.B
                && !(enharm.name === LETTERS.C && enharm.accidental === ACCIDENTALS.F)
                && !(enharm.name === LETTERS.F && enharm.accidental === ACCIDENTALS.F)
                && !(enharm.name === LETTERS.B && enharm.accidental === ACCIDENTALS.S)
                && !(enharm.name === LETTERS.E && enharm.accidental === ACCIDENTALS.S)) {
                getNotes ( enharm, scale );
            }
        }
    }
}