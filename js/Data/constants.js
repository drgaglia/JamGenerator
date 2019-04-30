
// Letter names for notes. Used to determine whether a scale
// already contains a pitch with a given letter
const LETTERS = Object.freeze (
    {
        "C" : 0,
        "D" : 2,
        "E" : 4,
        "F" : 5,
        "G" : 7,
        "A" : 9,
        "B" : 11
    }
);

// Accidental values
const ACCIDENTALS = Object.freeze (
    {
        "X" :  2,
        "S" :  1,
        "N" :  0,
        "F" : -1,
        "B" : -2
    }
);

// Steps (half, whole, 1.5)
const STEPS = Object.freeze (
    {
        "H" : 1,
        "W" : 2,
        "T" : 3
    }
);

// Scale tonicities (my made-up term for how many
// notes a scale contains)
const TONICITIES = Object.freeze (
    {
    //  "Quartatonic" : 4
        "Pentatonic"  : 5,
        "Hexatonic"   : 6,
        "Diatonic"    : 7,
        "Octatonic"   : 8,
    //  "Nonatonic"   : 9,
    //  "Decatonic"   : 10,
    //  "Undecatonic" : 11,
        "Chromatic"   : 12
    }
);

const CHROMATIC_SCALE = [

    // 0: C
    new Note ( 
        [
            new Enharmonic ( LETTERS.D, ACCIDENTALS.B ),
            null,
            new Enharmonic ( LETTERS.C, ACCIDENTALS.N ),
            new Enharmonic ( LETTERS.B, ACCIDENTALS.S ),
            null
        ],
        [
            "C0.wav",
            "C1.wav",
            "C2.wav",
            "C3.wav"
        ]
    ),

    // 1: Db/C#
    new Note (
        [
            null,
            new Enharmonic ( LETTERS.D, ACCIDENTALS.F ),
            null,
            new Enharmonic ( LETTERS.C, ACCIDENTALS.S ),
            null
        ],
        [
            "DbC#0.wav",
            "DbC#1.wav",
            "DbC#2.wav",
            "DbC#3.wav"
        ]
    ),

    // 2: D
    new Note (
        [
            new Enharmonic ( LETTERS.E, ACCIDENTALS.B ),
            null,
            new Enharmonic ( LETTERS.D,  ACCIDENTALS.N ),
            null,
            new Enharmonic ( LETTERS.C, ACCIDENTALS.X )
        ],
        [
            "D0.wav",
            "D1.wav",
            "D2.wav",
            "D3.wav"
        ]
    ),

    // 3: Eb/D#
    new Note (
        [
            null,
            new Enharmonic ( LETTERS.E, ACCIDENTALS.F ),
            null,
            new Enharmonic ( LETTERS.D, ACCIDENTALS.S ),
            null
        ],
        [
            "EbD#0.wav",
            "EbD#1.wav",
            "EbD#2.wav",
            "EbD#3.wav"
        ]
    ),

    // 4: E
    new Note (
        [
            null,
            new Enharmonic ( LETTERS.F, ACCIDENTALS.F ),
            new Enharmonic (LETTERS.E, ACCIDENTALS.N ),
            null,
            new Enharmonic (LETTERS.D, ACCIDENTALS.X )
        ],
        [
            "E0.wav",
            "E1.wav",
            "E2.wav",
            "E3.wav"
        ]
    ),

    // 5: F
    new Note (
        [
            new Enharmonic ( LETTERS.G, ACCIDENTALS.B ),
            null,
            new Enharmonic ( LETTERS.F, ACCIDENTALS.N ),
            new Enharmonic ( LETTERS.E, ACCIDENTALS.S ),
            null
        ],
        [
            "F0.wav",
            "F1.wav",
            "F2.wav",
            "F3.wav"
        ]
    ),

    // 6: Gb/F#
    new Note (
        [
            null,
            new Enharmonic ( LETTERS.G, ACCIDENTALS.F ),
            null,
            new Enharmonic ( LETTERS.F, ACCIDENTALS.S ),
            null
        ],
        [
            "GbF#0.wav",
            "GbF#1.wav",
            "GbF#2.wav",
            "GbF#3.wav"
        ]
    ),

    // 7: G
    new Note (
        [
            new Enharmonic ( LETTERS.A, ACCIDENTALS.B ),
            null,
            new Enharmonic ( LETTERS.G, ACCIDENTALS.N ),
            null,
            new Enharmonic ( LETTERS.F, ACCIDENTALS.X )
        ],
        [
            "G0.wav",
            "G1.wav",
            "G2.wav",
            "G3.wav"
        ]
    ),

    // 8: Ab/G#
    new Note (
        [
            null,
            new Enharmonic ( LETTERS.A, ACCIDENTALS.F ),
            null,
            new Enharmonic ( LETTERS.G, ACCIDENTALS.S ),
            null
        ],
        [
            "AbG#0.wav",
            "AbG#1.wav",
            "AbG#2.wav",
            "AbG#3.wav"
        ]
    ),

    // 9: A
    new Note (
        [
            new Enharmonic ( LETTERS.B, ACCIDENTALS.B ),
            null,
            new Enharmonic ( LETTERS.A, ACCIDENTALS.N ),
            null,
            new Enharmonic ( LETTERS.G, ACCIDENTALS.X )
        ],
        [
            "A0.wav",
            "A1.wav",
            "A2.wav",
            "A3.wav"
        ]
    ),

    // 10: Bb / A#
    new Note (
        [
            null,
            new Enharmonic ( LETTERS.B, ACCIDENTALS.F ),
            null,
            new Enharmonic ( LETTERS.A, ACCIDENTALS.S ),
            null
        ],
        [
            "BbA#0.wav",
            "BbA#1.wav",
            "BbA#2.wav",
            "BbA#3.wav"
        ]
    ),
    
    // 11: B
    new Note (
        [
            null,
            new Enharmonic ( LETTERS.C, ACCIDENTALS.F ),
            new Enharmonic ( LETTERS.B, ACCIDENTALS.N ),
            null,
            new Enharmonic ( LETTERS.A, ACCIDENTALS.X )
        ],
        [
            "B0.wav",
            "B1.wav",
            "B2.wav",
            "B3.wav"
        ]
    ),
];

// Hardcoded parent scales for 'normal' diatonic modes with the parent's steps
// And the names of all its modes
// TODO: Add Harmonic Major, Hungarian Minor, Neapolitan scales, etc
// TODO: Add sub-object in modes for alterate names (e.g. Mixolydian b6 / "Hindu")
const PARENT_SCALES = [   
    {
        name: "Ionian",
        steps: [ 
            STEPS.W,
            STEPS.W,
            STEPS.H,
            STEPS.W,
            STEPS.W,
            STEPS.W,
            STEPS.H    
        ],
        modes: [
            "Ionian",
            "Dorian",
            "Phrygian",
            "Lydian",
            "Mixolydian",
            "Aeolian",
            "Locrian" 
        ]
    },
    {
        name: "Harmonic Minor",
        steps: [
            STEPS.W,
            STEPS.H,
            STEPS.W,
            STEPS.W,
            STEPS.H,
            STEPS.T,
            STEPS.H
        ],
        modes: [
            "Harmonic Minor",
            "Locrian #6",
            "Ionian #5",
            "Dorian #4",
            "Phrygian Dominant",
            "Lydian #9",
            "Super Locrian bb7"
        ]
    },
    {
        name: "Melodic Minor",
        steps: [
            STEPS.W,
            STEPS.H,
            STEPS.W,
            STEPS.W,
            STEPS.W,
            STEPS.W,
            STEPS.H
        ],
        modes: [
            "Melodic Minor",
            "Dorian b2",
            "Lydian #5",
            "Lydian Dominant",
            "Mixolydian b6",
            "Locrian #2",
            "Super Locrian"
        ]
    },
    {
        name: "Hungarian Minor",
        steps: [
            STEPS.W,
            STEPS.H,
            STEPS.T,
            STEPS.H,
            STEPS.H,
            STEPS.T,
            STEPS.H
        ],
        modes: [
            "Hungarian Minor",
            "Oriental",
            "Ionian #2 #5",
            "Locrian bb3 bb7",
            "Double Harmonic",
            "Lydian #2 #6",
            "Altered bb7"
        ]
    },
];

// There are 12 chromatic notes
const CHROMATIC_LENGTH = CHROMATIC_SCALE.length;

// container for all modes after they've been generated
let modeGroups = [];

// container for all scales after they've been generated
let scales = [];

/*
*******************************************************************************
    ONLY DEV BELOW ************************************************************
    Intervals are going to require a deep dive. *******************************
    Would rather get Notes <--> Modes <--> Scales up and running first ********
    Most of this will probably get completely retooled ************************
*******************************************************************************
*/

// DEV ONLY
const QUALITIES = Object.freeze (
    {
        "Perfect" : 0,
        "Minor" : -1,
        "Major" : 0,
        "Tritone" : 0
    }
);

// DEV ONLY
const INTERVAL_GROUPS = Object.freeze (
    {
        "Octave" : "Octave",
        "Second" : "Second",
        "Third" : "Third",
        "Fourth" : "Fourth",
        "Fifth" : "Fifth",
        "Sixth" : "Sixth",
        "Seventh" : "Seventh",
        "Ninth" : "Ninth",
        "Eleventh" : "Eleventh",
        "Thirteenth" : "Thirteenth"
    }
);

// DEV ONLY
const INTERVALS = Object.freeze (
    {
        "Ocatve" : {
            quality : QUALITIES.Perfect,
            distance: 0 
        },
        "m2" :
        {
            
        }
        
           
        
    }
);

/* Intervals
const INTERVALS = Object.freeze (
    {
        "R"  : 0,
        "m2" : 1,
        "M2" : 2,
        "m3" : 3,
        "M3" : 4,
        "P4" : 5,
        "TT" : 6,
        "P5" : 7,
        "m6" : 8,
        "M6" : 9,
        "m7" : 10,
        "M7" : 11
    }
);
*/
