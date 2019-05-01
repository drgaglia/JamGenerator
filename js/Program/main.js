let isPlaying = false;
let tempo = 2000;
let key;
let playbackTimer;

window.onload = function () {
    init ();
}

function init () {
    modeGroups = generateInitialModes ( modeGroups );
    initializeUI ();
    key = new Key ( CHROMATIC_SCALE [ 0 ].enharmonics [ 2 ], modeGroups [ 0 ][ 0 ] );
}

/*\
|*|||||||||||||||||||||||||||||||||||||||||||||||
| ***************** Dev Below ***************** |
|*|||||||||||||||||||||||||||||||||||||||||||||||
\*/

function getRandomKeyChord () {
    scaleDegree = Math.floor ( Math.random () * key.modeSteps.length );
    let chord = "";
    key.keyChords [ scaleDegree ].forEach ( function ( note ) {
        chord += note.pitches[ 0 ] + " ";
    } ); 
    document.getElementById ( "chord-display" ).innerHTML = chord;
}

function togglePlayback ( isPlaying ) {
    if ( isPlaying ) {
        playbackTimer = setInterval ( getRandomKeyChord, tempo );
    } else {
        clearInterval ( playbackTimer );
    }   
}

document.getElementById ( "button-play" ).onclick = function () {
    isPlaying = !isPlaying;
    togglePlayback ( isPlaying );
}