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
        "S"  :  1,
        "N"  :  0,
        "F"  : -1,
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

/* 
 *  NOTES Array. Each element represents the set of notes enharmonic to that distance
 *  relative to C. This is represented as an array of 5 elements, for the 5 possible 
 *  enharmonic notes for a given distance (from double-flat at [ 0 ] to double-sharp at
 *  [ 4 ]). So,
 *      
 *      const NOTES = [
 *          [ 
 *              bb,
 *              b,
 *              natural,
 *              #,
 *              ##  
 *          ]
 *      ]
 *  
 *  All notes have either 2 or 3 enharmonics:
 *              
 *                   bb  b  n  #  ##
 *  All black keys: [ 0, 1, 0, 1, 0 ]
 *         A, D, G: [ 1, 0, 1, 0, 1 ]
 *            E, B: [ 0, 1, 1, 0, 1 ]
 *            C, F: [ 1, 0, 1, 1, 0 ]
 * 
 *  So the arrays will have values where the notes have enharmonics, and null where they do not
 *
 */
const NOTES = [
    // Value: 0, C
    [
        new Note ( LETTERS.D, ACCIDENTALS.B, "Dbb"), // bb
        null,                                        // b
        new Note ( LETTERS.C, ACCIDENTALS.N, "C" ),  // natural
        new Note ( LETTERS.B, ACCIDENTALS.S, "B#" ), // #
        null                                         // ##
    ],
    // Value: 1, C#/Db
    [
        null,
        new Note ( LETTERS.D, ACCIDENTALS.F, "Db" ),
        null,
        new Note ( LETTERS.C, ACCIDENTALS.S, "C#" ),
        null
    ],
    // Value: 2, D
    [
        new Note ( LETTERS.E, ACCIDENTALS.B, "Ebb" ),
        null,
        new Note ( LETTERS.D, ACCIDENTALS.N, "D" ),
        null,
        new Note ( LETTERS.C, ACCIDENTALS.X, "C##" )
    ],
    // Value: 3, D#/Eb
    [
        null,
        new Note ( LETTERS.E, ACCIDENTALS.F, "Eb" ),
        null,
        new Note ( LETTERS.D, ACCIDENTALS.S, "D#" ),
        null
    ],
    // Value: 4, E
    [
        null,
        new Note ( LETTERS.F, ACCIDENTALS.F, "Fb" ),
        new Note ( LETTERS.E, ACCIDENTALS.N, "E" ),
        null,
        new Note ( LETTERS.D, ACCIDENTALS.X, "D##" )
    ],
    // Value: 5, F
    [
        new Note ( LETTERS.G, ACCIDENTALS.B, "Gbb"), 
        null,                                        
        new Note ( LETTERS.F, ACCIDENTALS.N, "F" ),  
        new Note ( LETTERS.E, ACCIDENTALS.S, "E#" ), 
        null                                         
    ],
    // Value: 6, F#/Gb
    [
        null,
        new Note ( LETTERS.G, ACCIDENTALS.F, "Gb" ),
        null,
        new Note ( LETTERS.F, ACCIDENTALS.S, "F#" ),
        null
    ],
    // Value: 7, G
    [
        new Note ( LETTERS.A, ACCIDENTALS.B, "Abb" ),
        null,
        new Note ( LETTERS.G, ACCIDENTALS.N, "G" ),
        null,
        new Note ( LETTERS.F, ACCIDENTALS.X, "F##" )
    ],
    // Value: 8, G#/Ab
    [
        null,
        new Note ( LETTERS.A, ACCIDENTALS.F, "Ab" ),
        null,
        new Note ( LETTERS.G, ACCIDENTALS.S, "G#" ),
        null
    ],
    // Value: 9, A
    [
        new Note ( LETTERS.B, ACCIDENTALS.B, "Bbb" ),
        null,
        new Note ( LETTERS.A, ACCIDENTALS.N, "A" ),
        null,
        new Note ( LETTERS.G, ACCIDENTALS.X, "G##" )
    ],
    // Value: 10, A#/Bb
    [
        null,
        new Note ( LETTERS.B, ACCIDENTALS.F, "Bb" ),
        null,
        new Note ( LETTERS.A, ACCIDENTALS.S, "A#" ),
        null
    ],
    // Value: 11, B
    [
        null,
        new Note ( LETTERS.C, ACCIDENTALS.F, "Cb" ),
        new Note ( LETTERS.B, ACCIDENTALS.N, "B" ),
        null,
        new Note ( LETTERS.A, ACCIDENTALS.X, "A##" )
    ]
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
