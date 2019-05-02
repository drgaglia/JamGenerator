
 /**
  * Generates one 7 chord for every note of a given key (R, 3, 5, 7).
  * 
  * @param {Array[Note]} keyNotes Array of notes from any given key
  * 
  * @todo: Refactor. This will generate a diatonic 7 chord in key. 
  * Could possible be part of a larger function allowing generation
  * of chords of other qualities (sus, augmented, 9/11/13 with sharps
  * and flats, etc.) */
 function generateKeyChords ( keyNotes ) {
    let keyChords = [];
    let scaleLength = keyNotes.length;
    for ( let i = 0; i < scaleLength; i++ ) {
        let currentChord = [];

        /* Push the i'th, i + 2, i + 4, and i + 6 (all % 7) notes to
         * form the current chord. We want these specific notes because
         * our chords are built on the concept of triadic harmony. Read
         * more here: <link to triadic harmony documentation> */
        currentChord.push ( keyNotes [ i ] );
        currentChord.push ( keyNotes [ ( i + 2 ) % scaleLength ] );
        currentChord.push ( keyNotes [ ( i + 4 ) % scaleLength ] );
        currentChord.push ( keyNotes [ ( i + 6 ) % scaleLength ] );

        /* Push our new chord to the list of key chords. The order in 
         * which the chords are indexed is also their scale degree */
        keyChords.push ( currentChord );
    }

    // Is our key chord array empty? If so, error message. Return the array.
    if ( keyChords.length === 0 ) {
        alert ( "something went wrong in generatingScaleChords, " 
        + "also please replace this with proper error handling." );
    }
    return keyChords;
 }
