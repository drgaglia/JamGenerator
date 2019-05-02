
const CHORD_ARRAY_LENGTH = 3;

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
    key = new Key ( CHROMATIC_SCALE [ 1 ].enharmonics [ 1 ], modeGroups [ 0 ][ 0 ] );
    keyChordArray = [];
}

function fetchKeyChord () {
    scaleDegree = Math.floor ( Math.random () * key.modeSteps.length );
    let chord = "";     
    key.keyChords [ scaleDegree ].forEach ( function ( note ) {
        chord += note.pitches[ 0 ] + " ";
    } ); 
    return chord;
}

function getRandomKeyChord () {
    let chord;
    if ( keyChordArray.length ) {
        chord = fetchKeyChord ();
    } else {
        for ( let i = 0; i < CHORD_ARRAY_LENGTH; i++ ) {
            chord = fetchKeyChord ();
            keyChordArray.push ( chord );
        }
        chord = fetchKeyChord ();
    }

    document.getElementById ( "current-chord" ).innerHTML = keyChordArray.shift ();
    keyChordArray.push ( chord );

    for ( let i = 0; i < keyChordArray.length; i++ ) {
        document.getElementById ( "key-chord-array-" + i ).innerHTML =
            keyChordArray [ i ];
    }
}

function togglePlayback ( isPlaying ) {
    if ( isPlaying ) {
        playbackTimer = setInterval ( getRandomKeyChord, tempo );
    } else {
        clearInterval ( playbackTimer );
        for ( let i = 0; i < keyChordArray.length; i++ ) {            
            document.getElementById ( "key-chord-array-" + i ).innerHTML = "";
        }
        keyChordArray = [];
    }   
}

document.getElementById ( "button-play" ).onclick = function () {
    isPlaying = !isPlaying;
    togglePlayback ( isPlaying );
}


/*\
|*|||||||||||||||||||||||||||||||||||||||||||||||
| ***************** Dev Below ***************** |
|*|||||||||||||||||||||||||||||||||||||||||||||||
\*/

