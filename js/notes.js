const accidentals = Object.freeze (
    {
        "X" : "Double Sharp",
        "S" : "Sharp",
        "N" : "Natural",
        "F" : "Flat",
        "B" : "Double Flat"
    }
);

const letters = Object.freeze (
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

const notes = [
    {
        relativeToC: 0,
        value:
            [
                {
                    letter: letters.B,
                    accidental: accidentals.S,
                    name: "B#"
                },
                {
                    letter: letters.C,
                    accidental: accidentals.N,
                    name: "C"
                },
                {
                    letter: letters.D,
                    accidental: accidentals.B,
                    name: "Dbb"
                }
            ]
    },
    {
        relativeToC: 1,
        value:
            [
                {
                    letter: letters.C,
                    accidental: accidentals.S,
                    name: "C#"
                },
                {
                    letter: letters.D,
                    accidental: accidentals.F,
                    name: "Db"
                }
            ]
    },
    {
        relativeToC: 2,
        value:
            [
                {
                    letter: letters.C,
                    accidental: accidentals.X,
                    name: "C##"
                },
                {
                    letter: letters.D,
                    accidental: accidentals.N,
                    name: "D"
                },
                {
                    letter: letters.E,
                    accidental: accidentals.B,
                    name: "Ebb"
                }
            ]
    },
    {
        relativeToC: 3,
        value:
            [
                {
                    letter: letters.D,
                    accidental: accidentals.S,
                    name: "D#"
                },
                {
                    letter: letters.E,
                    accidental: accidentals.F,
                    name: "Eb"
                }
            ]
    },
    {
        relativeToC: 4,
        value:
            [
                {
                    letter: letters.D,
                    accidental: accidentals.X,
                    name: "D##"
                },
                {
                    letter: letters.E,
                    accidental: accidentals.N,
                    name: "E"
                },
                {
                    letter: letters.F,
                    accidental: accidentals.F,
                    name: "Fb"
                }
            ]
    },
    {
        relativeToC: 5,
        value:
            [
                {
                    letter: letters.E,
                    accidental: accidentals.S,
                    name: "E#"
                },
                {
                    letter: letters.F,
                    accidental: accidentals.N,
                    name: "F"
                },               
                {
                    letter: letters.G,
                    accidental: accidentals.B,
                    name: "Gbb"
                }
            ]
    },
    {
        relativeToC: 6,
        value:
            [
                {
                    letter: letters.F,
                    accidental: accidentals.S,
                    name: "F#"
                },
                {
                    letter: letters.G,
                    accidental: accidentals.F,
                    name: "Gb"
                }
            ]
    },
    {
        relativeToC: 7,
        value:
            [
                {
                    letter: letters.F,
                    accidental: accidentals.X,
                    name: "F##"
                },
                {
                    letter: letters.G,
                    accidental: accidentals.N,
                    name: "G"
                },
                {
                    letter: letters.A,
                    accidental: accidentals.B,
                    name: "Abb"
                }
            ]
    },
    {
        relativeToC: 8,
        value:
            [
                {
                    letter: letters.G,
                    accidental: accidentals.S,
                    name: "G#"
                },
                {
                    letter: letters.A,
                    accidental: accidentals.F,
                    name: "Ab"
                }
            ]
    },
    {
        relativeToC: 9,
        value:
            [
                {
                    letter: letters.G,
                    accidental: accidentals.X,
                    name: "G##"
                },
                {
                    letter: letters.A,
                    accidental: accidentals.N,
                    name: "A"
                },
                {
                    letter: letters.B,
                    accidental: accidentals.B,
                    name: "Bbb"
                }
            ]
    },
    {
        relativeToC: 10,
        value:
            [
                {
                    letter: letters.A,
                    accidental: accidentals.S,
                    name: "A#"
                },
                {
                    letter: letters.B,
                    accidental: accidentals.F,
                    name: "Bb"
                }
            ]
    },
    {
        relativeToC: 11,
        value:
            [
                {
                    letter: letters.A,
                    accidental: accidentals.X,
                    name: "A##"
                },
                {
                    letter: letters.B,
                    accidental: accidentals.N,
                    name: "B"
                },
                {
                    letter: letters.C,
                    accidental: accidentals.F,
                    name: "Cb"
                },
            ]
    },
]