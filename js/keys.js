class Key {
    constructor ( ) {
        this.keyCenter;
        this.steps;
        this.intervals;
        this.scaleDegrees;
        
        this.notes;
        this.chords;
        this.chordFunctions;

    }
}

// Builds scale notes by adding the steps of the input scale to the input tone
function generateScaleNotes ( tonal, scale ) {
	let scaleNotes = [];
	let currNote = tonal.name + tonal.accidental;
	scaleNotes.push ( CHROMATIC_SCALE [ currNote ] );
	for ( let i = 0; i < scale.steps.length - 1; i++ ) { 
		currNote = ( currNote + scale.steps [ i ] ) % CHROMATIC_LENGTH;
		scaleNotes.push ( CHROMATIC_SCALE [ currNote ] );
    }

    return scaleNotes.length ? scaleNotes : 
        alert ( "something went wrong in generatingScaleNotes" + 
            " also please replace this with proper error handling.");
}

/*
 * This function works. But it is hideous (see: if statement). Additionally, this brute forces
 * 'correctness' for natural whole-steps (basically saying "if the note is Cb, Fb, B#, or E#,
 * don't create a scale for it.") Again, it _works_, but I know there's got to be a more
 * built-in/architectural solution to this (i.e. the logic for why you can't build a scale on
 * these notes should pop out of the structure of the notes themselves).
 * 
 * I haven't figured out this solution yet, so for now it stays.
 * 
 * ---------------------------------------------------------------------------------------------
 * 
 * This function will supply the enharmonic and scale to the getNotes() function.
 * The outer for loop iterates through the entire chromatic scale (12 notes total)
 * The inner loop deserves some explanation. Each note of the chromatic scale contains an
 * 'enharmoincs' array of 5 elements: 
 * 
 *      [0] : bb | [1] : b | [2] : natural | [3] : # | [4] : ##
 * 
 * We NEVER want to build a scale off a double-flat or double-sharp (for reasons I will not
 * explain here), so we tell our loop to start at 1 (skip bb) and to end at length - 1 - 1 
 * (skip ##).
 * 
 * We then set an enharm variable to the enharmonic at [ i ][ j ]. This still may not exist,
 * so check it in an if statement. Lastly, ugly check that it doesn't meet any of the conditions
 * explained at the top of this comment.
 * 
 * If all these conditions pass, then the function will pass the enharmonic and scale to getNotes().
 * This should result in 17 scales for each mode - 7 for the naturals (CDEFGAB), 5 for the
 * sharps (CDFGA), and 5 for the flats (DEGAB)
 */
function generateAllScales ( scale ) {
    let count = 0;
    for ( let i = 0; i < CHROMATIC_LENGTH; i++ ) {
        for ( let j = 1; j < Object.entries ( ACCIDENTALS ).length - 1; j++ ) {
            let enharm = CHROMATIC_SCALE [ i ].enharmonics [ j ];
            if ( enharm
                && !(enharm.name === LETTERS.C && enharm.accidental === ACCIDENTALS.F)
                && !(enharm.name === LETTERS.F && enharm.accidental === ACCIDENTALS.F)
                && !(enharm.name === LETTERS.B && enharm.accidental === ACCIDENTALS.S)
                && !(enharm.name === LETTERS.E && enharm.accidental === ACCIDENTALS.S)) {
                generateScaleNotes ( enharm, scale );
            }
        }
    }
}