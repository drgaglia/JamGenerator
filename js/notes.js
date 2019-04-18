const ACCIDENTALS = Object.freeze (
    {
        "X" : "Double Sharp",
        "S" : "Sharp",
        "N" : "Natural",
        "F" : "Flat",
        "B" : "Double Flat"
    }
);

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

const NOTES = [
    {
        relativeToC: 0,
        values:
            [
                {
                    letter: LETTERS.B,
                    accidental: ACCIDENTALS.S,
                    name: "B#"
                },
                {
                    letter: LETTERS.C,
                    accidental: ACCIDENTALS.N,
                    name: "C"
                },
                {
                    letter: LETTERS.D,
                    accidental: ACCIDENTALS.B,
                    name: "Dbb"
                }
            ]
    },
    {
        relativeToC: 1,
        valuess:
            [
                {
                    letter: LETTERS.C,
                    accidental: ACCIDENTALS.S,
                    name: "C#"
                },
                {
                    letter: LETTERS.D,
                    accidental: ACCIDENTALS.F,
                    name: "Db"
                }
            ]
    },
    {
        relativeToC: 2,
        valuess:
            [
                {
                    letter: LETTERS.C,
                    accidental: ACCIDENTALS.X,
                    name: "C##"
                },
                {
                    letter: LETTERS.D,
                    accidental: ACCIDENTALS.N,
                    name: "D"
                },
                {
                    letter: LETTERS.E,
                    accidental: ACCIDENTALS.B,
                    name: "Ebb"
                }
            ]
    },
    {
        relativeToC: 3,
        values:
            [
                {
                    letter: LETTERS.D,
                    accidental: ACCIDENTALS.S,
                    name: "D#"
                },
                {
                    letter: LETTERS.E,
                    accidental: ACCIDENTALS.F,
                    name: "Eb"
                }
            ]
    },
    {
        relativeToC: 4,
        values:
            [
                {
                    letter: LETTERS.D,
                    accidental: ACCIDENTALS.X,
                    name: "D##"
                },
                {
                    letter: LETTERS.E,
                    accidental: ACCIDENTALS.N,
                    name: "E"
                },
                {
                    letter: LETTERS.F,
                    accidental: ACCIDENTALS.F,
                    name: "Fb"
                }
            ]
    },
    {
        relativeToC: 5,
        values:
            [
                {
                    letter: LETTERS.E,
                    accidental: ACCIDENTALS.S,
                    name: "E#"
                },
                {
                    letter: LETTERS.F,
                    accidental: ACCIDENTALS.N,
                    name: "F"
                },               
                {
                    letter: LETTERS.G,
                    accidental: ACCIDENTALS.B,
                    name: "Gbb"
                }
            ]
    },
    {
        relativeToC: 6,
        values:
            [
                {
                    letter: LETTERS.F,
                    accidental: ACCIDENTALS.S,
                    name: "F#"
                },
                {
                    letter: LETTERS.G,
                    accidental: ACCIDENTALS.F,
                    name: "Gb"
                }
            ]
    },
    {
        relativeToC: 7,
        values:
            [
                {
                    letter: LETTERS.F,
                    accidental: ACCIDENTALS.X,
                    name: "F##"
                },
                {
                    letter: LETTERS.G,
                    accidental: ACCIDENTALS.N,
                    name: "G"
                },
                {
                    letter: LETTERS.A,
                    accidental: ACCIDENTALS.B,
                    name: "Abb"
                }
            ]
    },
    {
        relativeToC: 8,
        values:
            [
                {
                    letter: LETTERS.G,
                    accidental: ACCIDENTALS.S,
                    name: "G#"
                },
                {
                    letter: LETTERS.A,
                    accidental: ACCIDENTALS.F,
                    name: "Ab"
                }
            ]
    },
    {
        relativeToC: 9,
        values:
            [
                {
                    letter: LETTERS.G,
                    accidental: ACCIDENTALS.X,
                    name: "G##"
                },
                {
                    letter: LETTERS.A,
                    accidental: ACCIDENTALS.N,
                    name: "A"
                },
                {
                    letter: LETTERS.B,
                    accidental: ACCIDENTALS.B,
                    name: "Bbb"
                }
            ]
    },
    {
        relativeToC: 10,
        values:
            [
                {
                    letter: LETTERS.A,
                    accidental: ACCIDENTALS.S,
                    name: "A#"
                },
                {
                    letter: LETTERS.B,
                    accidental: ACCIDENTALS.F,
                    name: "Bb"
                }
            ]
    },
    {
        relativeToC: 11,
        values:
            [
                {
                    letter: LETTERS.A,
                    accidental: ACCIDENTALS.X,
                    name: "A##"
                },
                {
                    letter: LETTERS.B,
                    accidental: ACCIDENTALS.N,
                    name: "B"
                },
                {
                    letter: LETTERS.C,
                    accidental: ACCIDENTALS.F,
                    name: "Cb"
                },
            ]
    },
]