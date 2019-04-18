const STEPS = Object.freeze (
    {
        "H" : 1,
        "W" : 2,
        "T" : 3
    }
);

// Unneeded (for now)
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

class Mode {

    constructor ( parent, modeNumber, name ) {
        this.parent = parent;
        this.modeNumber = modeNumber;
        this.name = name;
        this.steps = [];
        this.createMode ();
    }

    createMode () {
        let tonicity = this.parent.length;
        for ( let i = 0; i < tonicity; i++ ) {
            let degree = ( i + this.modeNumber ) % tonicity;           
            switch ( PARENT_SCALES.Ionian[degree] ) {
                case 1:
                    this.steps.push ( STEPS.H );
                    break;
                case 2:
                    this.steps.push ( STEPS.W );
                    break;
                case 3:
                    this.steps.push ( STEPS.T );
                    break; 
                default:
                    console.log ( "Something went wrong when creating the mode" );
            }              
        }
    }
}

const PARENT_SCALES = Object.freeze (
    {
        "Ionian" :
        [ 
            STEPS.W,
            STEPS.W,
            STEPS.H,
            STEPS.W,
            STEPS.W,
            STEPS.W,
            STEPS.H    
        ],
        "Harmonic Minor" :
        [
            STEPS.W,
            STEPS.H,
            STEPS.W,
            STEPS.W,
            STEPS.H,
            STEPS.T,
            STEPS.H
        ]
    }
);