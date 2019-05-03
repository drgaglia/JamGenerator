
const KEY_CHORD_ARRAY_LENGTH = 3;

let isPlaying,
    tempo,
    key,
    keyChordArray,
    playbackTimer;

window.onload = function () {
    init ();
}

function init () {
    modeGroups = generateInitialModes ( modeGroups );
    initializeUI ();
    isPlaying = false;
    tempo = 3000;
    key = new Key ( 
        CHROMATIC_SCALE [ LETTERS.C ].enharmonics [ ACCIDENTALS.N + 2 ], 
        modeGroups [ 0 ][ 0 ] 
    );
    keyChordArray = [];
}

/**
 * Generates a random number between 0 - 6, then selects that chord index from the key
 * 
 * @returns {Array} 
 * 
 * @todo Refactor so we're not using globals anymore
 */
function fetchKeyChord () {
    scaleDegree = Math.floor ( Math.random () * key.modeSteps.length );         // Random number 0 - 6
    return key.keyChords [ scaleDegree ];      
}

function getRandomKeyChord () {
    if ( keyChordArray.length === 0 ) {                                         // keyChordArray is empty, i.e. this is the first call to this function
        for ( let i = 0; i < KEY_CHORD_ARRAY_LENGTH; i++ ) {                    // Our array will arbitrarily consist of 3 elements
            keyChordArray.push ( fetchKeyChord () );                            // Fetch the next chord and push it to the array
        }
    }            
    let currentChord = keyChordArray.shift ();    
    document.getElementById ( "current-chord" ).innerHTML =                     /* The first element gets removed from the array and set as the */
        getAllChordNotesAsString ( currentChord );                              /* 'current chord'. Shift the array to set a new 'next' chord   */    
    keyChordArray.push ( fetchKeyChord () );                                    // Push the next chord                               
    for ( let i = 0; i < KEY_CHORD_ARRAY_LENGTH; i++ ) {                        
        document.getElementById ( "key-chord-array-" + i ).innerHTML =
            getAllChordNotesAsString ( keyChordArray [ i ] );
    }
}

function getAllChordNotesAsString ( chord ) {
    let chordDisplay = "";
    chord.forEach ( function ( note, i ) {
        let enharmonic = note.enharmonics [ ACCIDENTALS.N + 2 ] 
            ? ACCIDENTALS.N + 2 : ACCIDENTALS.F + 2;
        chordDisplay += 
            getKeyByValue ( note.enharmonics [ enharmonic ].name, LETTERS) + " "
            + getKeyByValue ( note.enharmonics [ enharmonic ].accidental, ACCIDENTALS );
            if ( ! ( i === chord.length - 1) ) {
                chordDisplay += ", ";
            }
    } );
    return chordDisplay;
}

/**
 * Finds a key by its value
 * 
 * @param {any} value The value to search for
 * @param {Array} inArray The array to search
 * 
 * @returns The key associated with the value
 */
function getKeyByValue ( value, inArray ) {
    return Object.keys ( inArray ).find ( key => inArray [ key ] === value ); 
}

/**
 * Starts or stops playback with setInterval and clearInterval. Updates
 * UI Elements accordingly.
 * 
 * @param {Boolean} isPlaying Boolean to determine if we start or stop playback
 */
function togglePlayback ( isPlaying ) {
    if ( isPlaying ) {
        playbackTimer = setInterval ( getRandomKeyChord, tempo );               // Sets the interval at which we will get new chords
    } else {
        clearInterval ( playbackTimer );                                        // Stops interval
        for ( let i = 0; i < keyChordArray.length; i++ ) {
            document.getElementById ( "key-chord-array-" + i ).innerHTML = "";  // Clear the UI elements
        }
        keyChordArray = [];                                                     // Clear the array
    }   
}

document.getElementById ( "button-play" ).onclick = function () {
    isPlaying = !isPlaying;                                                     // Flips flag to determine if we are starting or stopping playback
    togglePlayback ( isPlaying );
}


/*\
|*|||||||||||||||||||||||||||||||||||||||||||||||
| ***************** Dev Below ***************** |
|*|||||||||||||||||||||||||||||||||||||||||||||||
\*/

