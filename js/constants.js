// Letter names for notes. Used to determine whether a scale
// already contains a pitch with a given letter
const LETTERS = Object.freeze (
    {
        "C" : "C",
        "D" : "D",
        "E" : "E",
        "F" : "F",
        "G" : "G",
        "A" : "A",
        "B" : "B"
    }
);

// Accidental values
const ACCIDENTALS = Object.freeze (
    {
        "X" : "Double Sharp",
        "S" : "Sharp",
        "N" : "Natural",
        "F" : "Flat",
        "B" : "Double Flat"
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
        "Pentatonic" : 5,
        "Hexatonic" : 6,
        "Diatonic" : 7,
        "Octatonic" : 8,
    //  "Nonatonic" : 9,
    //  "Decatonic" : 10,
    //  "Undecatonic" : 11,
        "Chromatic" : 12
    }
);

/* 
 *  Notes object. Each element of notes represents all notes enharmonic
 *  to their indeces relative distance to C in semitones, i.e. :
 *
 *      NOTES[0] -> B#, C, Dbb (Enharmonic with 0 semitone distance to C)
 *      NOTES[6] -> F#, Gb (Enharmonic with 6 semitone distance to C )
 *
 *  flags: five element array to denote what enharmonic accidentals occupy
 *  the same pitch, i.e. :
 *      
 *      [ ##, #, nat, b, bb],
 * 
 *  so,
 *
 *      NOTES[0].flags -> [ 0, 1, 1, 0, 1 ]
 * 
 *  means the pitch has enharmonic sharp, natural, and double-flat representations,
 *  but not a double-sharp or flat
 * 
 */
const NOTES = [
    {
        flags: [ 0, 1, 1, 0, 1 ],
        values: 
        {
            X: {},
            S: {
                letter: LETTERS.B,
                accidental: ACCIDENTALS.S,
                name: "B#"
            },
            N: {
                letter: LETTERS.C,
                accidental: ACCIDENTALS.N,
                name: "C"
            },
            F: {},
            B: {
                letter: LETTERS.D,
                accidental: ACCIDENTALS.B,
                name: "Dbb"
            }
        }       
    },
    {
        flags: [ 0, 1, 0, 1, 0 ],
        values:
        {
            X: {},
            S: {
                letter: LETTERS.C,
                accidental: ACCIDENTALS.S,
                name: "C#"
            },
            N: {},
            F: {
                letter: LETTERS.D,
                accidental: ACCIDENTALS.F,
                name: "Db"
            },
            B: {}
        }
    },
    {
        flags: [ 1, 0, 1, 0, 1 ],
        values:
        {
            X: {   
                letter: LETTERS.C,
                accidental: ACCIDENTALS.X,
                name: "C##"
            },
            S: {},
            N: {
                letter: LETTERS.D,
                accidental: ACCIDENTALS.N,
                name: "D"
            },
            F: {},
            B: {
                letter: LETTERS.E,
                accidental: ACCIDENTALS.B,
                name: "Ebb"                    
            }
        }
    },
    {
        flags: [ 0, 1, 0, 1, 0 ],
        values:
        {
            X: {},
            S: {
                letter: LETTERS.D,
                accidental: ACCIDENTALS.S,
                name: "D#"
            },
            N: {},
            F: {
                letter: LETTERS.E,
                accidental: ACCIDENTALS.F,
                name: "Eb"
            },
            B: {}
        }
    },
    {
        flags: [ 1, 0, 1, 1, 0 ],
        values:
        {
            X: {
                letter: LETTERS.D,
                accidental: ACCIDENTALS.X,
                name: "D##"
            },
            S: {},
            N: {
                letter: LETTERS.E,
                accidental: ACCIDENTALS.N,
                name: "E"
            },
            F: {
                letter: LETTERS.F,
                accidental: ACCIDENTALS.F,
                name: "Fb"
            },
            B: {}
        }
    },
    {
        flags: [ 0, 1, 1, 0, 1 ],
        values:
        {
            X: {},
            S: {
                letter: LETTERS.E,
                accidental: ACCIDENTALS.S,
                name: "E#"
            },
            N: {
                letter: LETTERS.F,
                accidental: ACCIDENTALS.N,
                name: "F"
            },
            F: {},
            B: {
                letter: LETTERS.G,
                accidental: ACCIDENTALS.B,
                name: "Gbb"
            }
        }
    },
    {
        flags: [ 0, 1, 0, 1, 0 ],
        values:
        {
            X: {},
            S: {
                letter: LETTERS.F,
                accidental: ACCIDENTALS.S,
                name: "F#"
            },
            N: {},
            F: {
                letter: LETTERS.G,
                accidental: ACCIDENTALS.F,
                name: "Gb"
            },
            B: {}
        }
    },
    {
        flags: [ 1, 0, 1, 0, 1 ],
        values:
        {
            X: {
                letter: LETTERS.F,
                accidental: ACCIDENTALS.X,
                name: "F##"
            },
            S: {},
            N: {
                letter: LETTERS.G,
                accidental: ACCIDENTALS.N,
                name: "G"
            },
            F: {},
            B: {
                letter: LETTERS.A,
                accidental: ACCIDENTALS.B,
                name: "Abb"
            }
        }
    },
    {
        flags: [ 0, 1, 0, 1, 0 ],
        values:
        {
            X: {},
            S: {
                letter: LETTERS.G,
                accidental: ACCIDENTALS.S,
                name: "G#"
            },
            N: {},
            F: {
                letter: LETTERS.A,
                accidental: ACCIDENTALS.F,
                name: "Ab"
            },
            B: {}
        }
    },
    {
        flags: [ 1, 0, 1, 0, 1 ],
        values:
        {
            X: {
                letter: LETTERS.G,
                accidental: ACCIDENTALS.X,
                name: "G##"
            },
            S: {},
            N: {
                letter: LETTERS.A,
                accidental: ACCIDENTALS.N,
                name: "A"
            },
            F: {},
            B: {
                letter: LETTERS.B,
                accidental: ACCIDENTALS.B,
                name: "Bbb"
            }
        }
    },
    {
        flags: [ 0, 1, 0, 1, 0 ],
        values:
        {
            X: {},
            S: {
                letter: LETTERS.A,
                accidental: ACCIDENTALS.S,
                name: "A#"
            },
            N: {},
            F: {
                letter: LETTERS.B,
                accidental: ACCIDENTALS.F,
                name: "Bb"
            },
            B: {}
        }
    },
    {
        flags: [ 1, 0, 1, 1, 0 ],
        values:
        {
            X: {
                letter: LETTERS.A,
                accidental: ACCIDENTALS.X,
                name: "A##"
            },
            S: {},
            N: {
                letter: LETTERS.B,
                accidental: ACCIDENTALS.N,
                name: "B"
            },
            F: {
                letter: LETTERS.C,
                accidental: ACCIDENTALS.F,
                name: "Cb"
            },
            B: {}
        }
    }
]