 
 function generateKeyChords ( keyNotes ) {
    let keyChords = [];
    let scaleLength = keyNotes.length;
    for ( let i = 0; i < scaleLength; i++ ) {
        let currentChord = [];
        currentChord.push ( keyNotes [ i ] );
        currentChord.push ( keyNotes [ ( i + 2 ) % scaleLength ] );
        currentChord.push ( keyNotes [ ( i + 4 ) % scaleLength ] );
        currentChord.push ( keyNotes [ ( i + 6 ) % scaleLength ] );
        keyChords.push ( currentChord );
    }
    return keyChords.length ? keyChords : 
        alert ( "something went wrong in generatingScaleChords, " 
            + "also please replace this with proper error handling." );
 }
